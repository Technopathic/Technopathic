import axios from 'axios'

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    /*const token = await axios({
        method: 'POST',
        url: `https://id.twitch.tv/oauth2/token`,
        data: {
            client_id: process.env.TWITCH_ID,
            client_secret: process.env.TWITCH_SECRET,
            grant_type: "client_credentials"
        },
        headers: { 'Content-Type': "application/json" }
    })
        .then(response => response.data)

    const subscribe = await axios({
        method: 'POST',
        url: 'https://api.twitch.tv/helix/eventsub/subscriptions',
        data: {
            type: 'channel.follow',
            version: '1',
            condition: {
                broadcaster_user_id: "568729531"
            },
            transport: {
                method: "webhook",
                callback: "https://nownano.tv/api/generatePokemon",
                secret: process.env.TWITCH_HUB_SECRET
            }
        },
        headers: {
            'Authorization': `Bearer ${token.access_token}`,
            'Content-Type': "application/json",
            'Client-ID': process.env.TWITCH_ID
        }
    })
        .then(response => response.data)
        .catch(err => { console.log(err) })

    return res.status(200).json(subscribe)*/
}