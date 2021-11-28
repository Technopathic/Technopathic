import { createClient } from '@supabase/supabase-js'
//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

export default async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    supabase.from('boxes').insert([{ name: 'Poke Box', pokemon: [pokemonData] }])
    let { data, error } = await supabase.from('memes').select('*')

    return res.status(200).json(data)
}