import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    let { data, error } = await supabase.from('boxes').select('*')

    return res.status(200).json(data)
}