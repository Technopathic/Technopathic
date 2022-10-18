import { createClient } from '@supabase/supabase-js'
import * as BLOCK_MATRIX from '../../data/ravagersrun/blocks.json';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

//{"RED TEAM": { "PLAYERS": [] }, "BLUE TEAM": { "PLAYERS": [] }}
const MAX_GAME_LENGTH = 15
const BLOCK_TYPES = ['RED', 'BLACK', 'BLUE', 'BROWN', 'CYAN', 'GRAY', 'GREEN', 'LIGHT_BLUE', 'LIGHT_GRAY', 'LIME', 'MAGENTA', 'ORANGE', 'PINK', 'PURPLE', 'WHITE', 'YELLOW']

const getLobby = async(lobbyId) => {
    const { data, error } = await supabase.from('lobby').select('*').eq('id', lobbyId)
    if(error) {
        return undefined
    }

    return data[0]
}

const getGame = async(lobbyId)  => {
    const { data, error } = await supabase.from('game').select('*').eq('lobbyId', lobbyId);
    if(error) {
        return undefined
    }

    return data[0];
}

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const currentDate = new Date();

    const requestData = JSON.parse(req.body)
    const playerName = requestData.playerName
    const lobbyId = requestData.lobbyId
    const teamName = requestData.teamName

    if(!playerName || !lobbyId || !teamName) {
        return res.status(401).json({
            error: req.body
        })
    }

    const lobby = await getLobby(lobbyId);
    if(!lobby) {
        return res.status(404).json({
            error: `Lobby ${lobbyId} not found.`
        })
    }
    
    const team = lobby.teams[teamName]
    if(!team) {
        return res.status(404).json({
            error: `Team ${teamName} not found.`
        })
    }

    const game = await getGame(lobby.id);
    if(game && game.lock === true) {
        if(((currentDate.getTime() - game.startDate.getTime()) / 1000) / 60 < MAX_GAME_LENGTH) {
            return res.status(401).json({
                error: 'Game is currently in session.'
            })
        } else {
            game.lock = false
            await supabase.from('ravagers').update({ game }).match({ id: game.id })
        }
    }

    for (const key in lobby.teams) {
        const team = lobby.teams[key]
        const playerExists = team.PLAYERS.some(player => player.PLAYER_NAME === playerName);
        if(playerExists) {
            await leaveLobby(lobby, playerName, key);
    
            return res.status(200).json({
                success: true,
                message: `${playerName} left lobby.`,
                gameStart: false,
                teams: [],
                blocks: []
            })
        }  
    }  

    if(team.PLAYERS.length === lobby.maxPlayers / 2) {
        return res.status(401).json({
            error: 'Team is full.'
        })
    }

    lobby.teams[teamName].PLAYERS.push({
        PLAYER_NAME: playerName
    })

    await supabase.from('lobby').update(lobby).eq('id', lobby.id)

    let gameStart = true;
    let gameData = null

    for (const key in lobby.teams) {
        const team = lobby.teams[key]
        if(team.PLAYERS.length !== lobby.maxPlayers / 2) {
            gameStart = false
        }
    }

    let players = [];
    if(gameStart) {
        gameData = await startGame(lobby)
        players = gameData.players.map(player => player.PLAYER_NAME)
    }

    return res.status(200).json({
        success: true,
        message: `${playerName} joined lobby.`,
        gameStart,
        players,
        blocks: gameData ? gameData.blocks : null
    })
}

const startGame = async (lobby) => {
    const generateBlocks = async(team) => {
        const blocks = [];
        const blockMatrix = BLOCK_MATRIX[`LOBBY_${lobby.id}`][team]
        for (let i = 0; i < blockMatrix.length; i++) {
            const block = BLOCK_TYPES[Math.floor(Math.random() * BLOCK_TYPES.length)] + '_CONCRETE'
            const blockPosition = blockMatrix[i].BLOCK_POSITION

            blocks.push({
                BLOCK_NAME: block,
                BLOCK_POSITION: {
                    x: blockPosition.x,
                    y: blockPosition.y,
                    z: blockPosition.z
                },
                HAS_BLOCK: false,
                PLACED_AT: "",
                PLACED_BY: ""
            })
        }

        return blocks;
    }
    
    const game = {teams: JSON.parse(JSON.stringify(lobby.teams))}

    const blocks = []
    for (const key in game.teams) {
        const team = game.teams[key]
        team.BLOCKS = await generateBlocks(key)
        blocks.push(...team.BLOCKS)
    }

    await supabase.from('games').insert(game)

    const players = []
    for (const key in lobby.teams) {
        const team = lobby.teams[key]
        players.push(...team.PLAYERS)
        team.PLAYERS = []
    }

    await supabase.from('lobby').update({ teams: lobby.teams }).eq('id', lobby.id)

    return {
        blocks,
        players
    }
}

const leaveLobby = async (lobby, player, team) => {
    for (let i = 0; i < lobby.teams[team].PLAYERS.length; i++) {
        if(lobby.teams[team].PLAYERS[i].PLAYER_NAME === player) {
            lobby.teams[team].PLAYERS.splice(i, 1);
        }
    }

    await supabase.from('lobby').update(lobby).eq('id', lobby.id)
}