import axios from 'axios'

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const result = await axios({
        method: 'POST',
        url: `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
        data: {},
        headers: { 'Content-Type': "application/json" }
    })
        .then(response => response.json())
        .then(json => json)
        .catch(err => err)

    return res.status(200).json(result)
}