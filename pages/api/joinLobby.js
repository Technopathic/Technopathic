import { createClient } from '@supabase/supabase-js'
import * as BLOCK_MATRIX from '../../data/ravagersrun/blocks.json';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const MAX_GAME_LENGTH = 15
const MAX_BLOCKS = 16
const BLOCK_TYPES = []

const getLobby = async(lobbyId) => {
    const { data, error } = await supabase.from('lobby').select('*').eq('id', lobbyId)
    if(error) {
        return undefined
    }
    console.warn({ data: data[0] })
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

    console.warn({
        playerName,
        lobbyId,
        teamName
    })

    const lobby = await getLobby(lobbyId);
    if(!lobby) {
        return res.status(404).json({
            error: `Lobby ${lobbyId} not found.`
        })
    }

    console.warn({lobby})
    
    const team = lobby.teams[teamName]
    if(!team) {
        return res.status(404).json({
            error: `Team ${teamName} not found.`
        })
    }

    console.warn({team})

    if(team.PLAYERS.length === lobby.maxPlayers / 2) {
        return res.status(401).json({
            error: 'Team is full.'
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

    console.warn({game})

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

    team.PLAYERS.push({
        PLAYER_NAME: playerName
    })

    await supabase.from('lobby').update({ lobby }).match({ id: lobby.id })

    let gameStart = false;
    let gameData = null
    if(lobby.teams.every(team => team.PLAYERS.length === lobby.maxPlayers / 2)) {
        gameData = await startGame(lobby)
        if(gameData) {
            gameStart = true;
        }
    }

    console.log({gameData})

    return res.status(200).json({
        success: true,
        message: `${playerName} joined lobby.`,
        gameStart,
        teams: gameData ? gameData.teams : null,
        blocks: gameData ? gameData.BLOCKS : null
    })
}

const startGame = async (lobby) => {
    const generateBlocks = async(count, offset) => {
        const blocks = [];
        for (let i = 0; i < count; i++) {
            const block = BLOCK_TYPES[Math.floor(Math.random() * BLOCK_TYPES.length)];
            const blockPosition = BLOCK_MATRIX[`LOBBY_${lobby.id}`][i]
            blocks.push({
                BLOCK_NAME: block,
                BLOCK_POSITION: {
                    x: blockPosition.x,
                    y: blockPosition.y,
                    z: blockPosition.z + offset
                },
                HAS_BLOCK: false,
                PLACED_AT: "",
                PLACED_BY: ""
            })
        }


        return blocks;
    }

    
    const game = {
        teams: lobby.teams
    }

    game.teams[0].BLOCKS = await generateBlocks(MAX_BLOCKS, -11)
    game.teams[1].BLOCKS = await generateBlocks(MAX_BLOCKS, 11)
    lobby.teams[0].PLAYERS = []
    lobby.teams[1].PLAYERS = []

    const { data, error } = await supabase.from('games').insert({ game })
    await supabase.from('lobby').update({ lobby }).eq({ id: lobby.id })

    return data[0]
}

const leaveLobby = async (lobby, player, team) => {
    for (let i = 0; i < lobby.teams[team].PLAYERS.length; i++) {
        if(lobby.teams[team].PLAYERS[i].PLAYER_NAME === player) {
            lobby.teams[team].PLAYERS.splice(i, 1);
        }
    }

    await supabase.from('lobby').update({ lobby }).match({ id: lobby.id })
}