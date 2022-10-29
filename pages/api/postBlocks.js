import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const getGame = async(lobbyId)  => {
    const { data, error } = await supabase.from('games').select('*').eq('id', gameId);
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
    const blockType = requestData.blockType
    const blockX = Number(requestData.x)
    const blockY = Number(requestData.y)
    const blockZ = Number(requestData.z)
    const gameId = requestData.gameId

    if(!playerName || !blockType || !blockX || !blockY || !blockZ) {
        return res.status(401).json({
            error: req.body
        })
    }

    const { game } = await getGame(gameId);
    if(!game) {
        return res.status(401).json({
            error: 'Game not found'
        })
    }

    for (const key in game.teams) {
        const team = game.teams[key]
        const playerMatch = team.PLAYERS.find(player => player.PLAYER_NAME === playerName)
        if(playerMatch) {
            const blockItem = team.BLOCKS.find(block => 
                block.BLOCK_NAME === blockType && 
                block.BLOCK_POSITION.x === blockX &&
                block.BLOCK_POSITION.y === blockY &&
                block.BLOCK_POSITION.z === blockZ &&
                block.HAS_BLOCK === false
            )

            if(blockItem) {
                blockItem.HAS_BLOCK = true
                blockItem.PLACED_BY = playerName
                blockItem.PLACED_AT = new Date()

                await supabase.from('game').update({ game }).match({ id: game.id })

                const endGame = team.BLOCKS.every(block => block.HAS_BLOCK === true)
                const winner = null
                if(endGame) {
                    game.lock = false
                    winner = team
                }

                return res.status(200).json({
                    success: true,
                    endGame,
                    winner
                })
            }
        }

    }
   
    return res.status(401).json({
        success: false
    })
}