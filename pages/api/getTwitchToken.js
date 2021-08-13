import axios from 'axios'

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const expected = req.headers['x-hub-signature']

    const token = await axios({
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
        url: 'https://api.twitch.tv/helix/webhooks/hub',
        data: {
            'hub.callback': 'https://nownano.tv/api/generatePokemon',
            'hub.mode': 'subscribe',
            'hub.topic': 'https://api.twitch.tv/helix/users/follows',
            'hub.lease_seconds': 864000,
            'hub.secret': process.env.TWITCH_HUB_SECRET
        },
        headers: {
            'Authorization': `bearer ${token.access_token}`,
            'Content-Type': "application/json"
        }
    })

    return res.status(200).json(subscribe)
}