import { createClient } from '@supabase/supabase-js'
import * as ADMINS from '../../data/ravagersrun/admins.json'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const getTeam = async(teamId) => {
    const { data, error } = await supabase.from('teams').select('*').eq('id', teamId);
    if(error) {
        return undefined
    }

    return data[0];
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
    const teamOneId = requestData.teamOne
    const teamTwoId = requestData.teamTwo

    if(!requestName|| !teamOneId || !teamTwoId) {
        return res.status(401).json({
            error: req.body
        })
    }

    if(!ADMINS.includes(requestName)) {
        return res.status(403).json({
            success: false,
            error: 'You do not have permission.'
        })
    }

    const teamOne = await getTeam(teamOneId)
    const teamTwo = await getTeam(teamTwoId)

    if(!teamOne || !teamTwo) {
        return res.status(403).json({
            success: false,
            error: 'Team not found'
        })
    }

    const game = {
        stageId: null,
        played: false,
        teams: [
            {
                "TEAM_NAME": teamOne.teamName,
                "TEAM_MATERIAL": teamOne.material,
                "PLAYERS": teamOne.players,
                "BLOCKS": []
            },
            {
                "TEAM_NAME": teamTwo.teamName,
                "TEAM_MATERIAL": teamTwo.material,
                "PLAYERS": teamTwo.players,
                "BLOCKS": []
            }
        ]
    }

    const { data, error } = await supabase.from('games').insert(game)

    return res.status(200).json({
        success: true,
        message: `GameId: ${data[0].id} - ${teamOne.teamName} VS ${teamTwo.teamName}`
    })
}