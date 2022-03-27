import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const CURRENT_GAME = 1;

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const requestData = JSON.parse(req.body);
    const playerName = requestData.playerName;
    const blockType = requestData.blockType;
    const blockX = Number(requestData.x);
    const blockY = Number(requestData.y);
    const blockZ = Number(requestData.z);

    if(!playerName || !blockType || !blockX || !blockY || !blockZ) {
        return res.status(401).json({
            error: req.body
        })
    }

    const getGame = async() => {
        const { data, error } = await supabase.from('ravagers').select('*').eq('id', CURRENT_GAME);
        if(error) {
           return { game: null, currentRound: null }
        }
        return { game: data[0].game, currentRound: data[0].current_round }
    }

    const { game, currentRound} = await getGame();
    if(!game) {
        return res.status(401).json({
            success: false
        })
    }
    const gameRound = game[`ROUND_${currentRound}`]

    for (const index in gameRound) {
        const match = gameRound[index]

        const playerMatch = match.find(m => m.PLAYERS.find(player => player.PLAYER_NAME === playerName))
        if(playerMatch) {
            const matchIndex = match.findIndex(m => m.BLOCKS.find(block => 
                block.BLOCK_NAME === blockType && 
                block.BLOCK_POSITION.x === blockX &&
                block.BLOCK_POSITION.y === blockY &&
                block.BLOCK_POSITION.z === blockZ &&
                block.HAS_BLOCK === false
            ));
           
            if(matchIndex !== null && matchIndex !== -1) {
                const blockIndex = gameRound[index][matchIndex].BLOCKS.findIndex(b => b.BLOCK_NAME === blockType)
                gameRound[index][matchIndex].BLOCKS[blockIndex].HAS_BLOCK = true
                gameRound[index][matchIndex].BLOCKS[blockIndex].PLACED_BY = playerName
                gameRound[index][matchIndex].BLOCKS[blockIndex].PLACED_AT = new Date()
                await supabase.from('ravagers').update({ game }).match({ id: CURRENT_GAME })
                
                return res.status(200).json({
                    success: true
                })
            }
        }
    }
   
    return res.status(401).json({
        success: false
    })
}