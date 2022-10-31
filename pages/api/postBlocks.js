import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const getGame = async(gameId) => {
    const { data, error } = await supabase.from('games').select('*').eq('id', gameId);
    if(error) {
        return undefined
    }

    return data[0];
}

const getGameByStage = async(stageId) => {
    const { data, error } = await supabase.from('games').select('*').eq('stageId', stageId);
    if(error) {
        return undefined
    }

    return data[0];
}

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const requestData = JSON.parse(req.body)
    const playerName = requestData.playerName
    const blockName = requestData.blockName
    const blockX = Number(requestData.x)
    const blockY = Number(requestData.y)
    const blockZ = Number(requestData.z)
    const stageId = Number(requestData.stageId)

    if(!playerName || !blockName || !blockX || !blockY || !blockZ || !stageId) {
        return res.status(401).json({
            error: req.body
        })
    }

    const game = await getGameByStage(stageId);
    if(!game) {
        return res.status(403).json({
            error: 'Game not found'
        })
    }

    console.warn({
        blockName,
        blockX,
        blockY: blockY + 1,
        blockZ,
        stageId,
        playerName
    })

    for (const key in game.teams) {
        const team = game.teams[key]
        const playerMatch = team.PLAYERS.find(player => player === playerName)
        console.warn({
            playerMatch
        })
        if(playerMatch) {
            const blockItem = team.BLOCKS.find(block => 
                block.BLOCK_NAME === blockName && 
                block.BLOCK_POSITION.x === blockX &&
                block.BLOCK_POSITION.y === blockY + 1 &&
                block.BLOCK_POSITION.z === blockZ &&
                block.HAS_BLOCK === false
            )

            console.warn({
                blockItem
            })

            if(blockItem) {
                blockItem.HAS_BLOCK = true
                blockItem.PLACED_BY = playerName
                blockItem.PLACED_AT = new Date()

                await supabase.from('games').update(game).eq('id', game.id)

                const endGame = team.BLOCKS.every(block => block.HAS_BLOCK === true)
                const winTeamName = null
                if(endGame) {
                    winTeamName = team.teamName
                }

                return res.status(200).json({
                    success: true,
                    endGame,
                    winTeamName
                })
            }
        }

    }
   
    return res.status(401).json({
        success: false
    })
}