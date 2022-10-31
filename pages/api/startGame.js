import { createClient } from '@supabase/supabase-js'
import * as BLOCK_MATRIX from '../../data/ravagersrun/blocks.json';
import * as ADMINS from '../../data/ravagersrun/admins.json'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const getGame = async(gameId) => {
    const { data, error } = await supabase.from('games').select('*').eq('id', gameId)
    if(error) {
        return undefined
    }

    return data[0]
}

const updateStage = async(gameId, stageId) => {
    const { data, error } = await supabase.from('games').select('*').eq('stageId', stageId)
    if(error) {
        return undefined
    }

    for (const game of data) {
        game.stageId = null

        await supabase.from('games').update(game).eq('id', game.id)
    }
}

const generateBlocks = async(stageId, teamIndex) => {
    const BLOCK_TYPES = ['RED', 'BLACK', 'BLUE', 'BROWN', 'CYAN', 'GRAY', 'GREEN', 'LIGHT_BLUE', 'LIGHT_GRAY', 'LIME', 'MAGENTA', 'ORANGE', 'PINK', 'PURPLE', 'WHITE', 'YELLOW']
    const blocks = [];
    const blockMatrix = BLOCK_MATRIX[`STAGE_${stageId}`][`TEAM_${teamIndex}`]
    for (let i = 0; i < blockMatrix.length; i++) {
        const blockIndex = Math.floor(Math.random() * BLOCK_TYPES.length)
        const block = BLOCK_TYPES[blockIndex] + '_CONCRETE'
        const blockPosition = blockMatrix[i].BLOCK_POSITION
        BLOCK_TYPES.splice(blockIndex, 1);

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

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ 
            success: false, 
            error: 'Not Allowed' 
        })
    }

    const requestData = JSON.parse(req.body)
    const requestName = requestData.requestName
    const stageId = Number(requestData.stageId)
    const gameId = Number(requestData.gameId)

    if(!requestName || !stageId || !gameId) {
        return res.status(401).json({
            success: false,
            error: req.body
        })
    }

    if(!ADMINS.ADMINS.includes(requestName)) {
        return res.status(403).json({
            success: false,
            error: 'You do not have permission.'
        })
    }

    const game = await getGame(gameId)
    if(!game) {
        return res.status(404).json({
            success: false,
            error: `Game ${gameId} not found.`
        })
    }

    if(game.played) {
        return res.status(401).json({
            success: false,
            error: `Game has already been played`
        })
    }

    await updateStage(gameId, stageId)

    const blockMaterials = []
    const blockPositionX = [];
    const blockPositionY = [];
    const blockPositionZ = [];
    const players = []
    const materials = []

    for (let i = 0; i < game.teams.length; i++) {
        const teamBlocks = await generateBlocks(stageId, i)
        game.teams[i].BLOCKS = teamBlocks

        for (const block of teamBlocks) {
            blockMaterials.push(block.BLOCK_NAME)
            blockPositionX.push(block.BLOCK_POSITION.x);
            blockPositionY.push(block.BLOCK_POSITION.y);
            blockPositionZ.push(block.BLOCK_POSITION.z);
        }
        players.push(...game.teams[i].PLAYERS)
        materials.push(game.teams[i].TEAM_MATERIAL)
    }

    game.played = true
    game.stageId = stageId
    await supabase.from('games').update(game).eq('id', game.id)

    const subtitle = `${game.teams[0]} VS ${game.teams[1]}`

    return res.status(200).json({
        success: true,
        players,
        materials,
        blockMaterials,
        blockPositionX,
        blockPositionY,
        blockPositionZ,
        subtitle
    })
}