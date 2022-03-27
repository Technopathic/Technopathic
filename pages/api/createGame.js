import { createClient } from '@supabase/supabase-js'
//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ error: 'Not Allowed' })
    }



    return res.status(200).json('Hi')
}