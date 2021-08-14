import axios from 'axios'
import { createClient } from '@supabase/supabase-js'
import { Buffer } from 'buffer'

const crypto = require('crypto')

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const MAX_POKEMON = 898
const EVOLUTION_CHAINS = 475
const MAX_LEVEL = 100
const MAX_BERRIES = 64
const POKE_BALLS = ['Poke Ball', 'Great Ball', 'Ultra Ball', 'Master Ball', 'Safari Ball', 'Fast Ball', 'Level Ball', 'Lure Ball', 'Heavy Ball', 'Love Ball', 'Friend Ball', 'Moon Ball', 'Sport Ball', 'Net Ball', 'Nest Ball', 'Repeat Ball', 'Timer Ball', 'Luxury Ball', 'Premier Ball', 'Dive Ball', 'Dusk Ball', 'Heal Ball', 'Quick Ball', 'Cherish Ball', 'Park Ball', 'Dream Ball', 'Beast Ball']
const NATURES = [
    { name: 'Hardy', increasedStat: null, decreasedStat: null, favoriteFlavor: null, dislikedFlavor: null },
    { name: 'Lonely', increasedStat: 'Attack', decreasedStat: 'Defense', favoriteFlavor: 'Spicy', dislikedFlavor: 'Sour' },
    { name: 'Brave', increasedStat: 'Attack', decreasedStat: 'Speed', favoriteFlavor: 'Spicy', dislikedFlavor: 'Sweet' },
    { name: 'Adamant', increasedStat: 'Attack', decreasedStat: 'SpAttack', favoriteFlavor: 'Spicy', dislikedFlavor: 'Dry' },
    { name: 'Naughty', increasedStat: 'Attack', decreasedStat: 'SpDefense', favoriteFlavor: 'Spicy', dislikedFlavor: 'Bitter' },
    { name: 'Bold', increasedStat: 'Defense', decreasedStat: 'Attack', favoriteFlavor: 'Sour', dislikedFlavor: 'Spicy' },
    { name: 'Docile', increasedStat: null, decreasedStat: null, favoriteFlavor: null, dislikedFlavor: null },
    { name: 'Relaxed', increasedStat: 'Defense', decreasedStat: 'Speed', favoriteFlavor: 'Sour', dislikedFlavor: 'Sweet' },
    { name: 'Impish', increasedStat: 'Defense', decreasedStat: 'SpAttack', favoriteFlavor: 'Sour', dislikedFlavor: 'Dry' },
    { name: 'Lax', increasedStat: 'Defense', decreasedStat: 'SpDefense', favoriteFlavor: 'Sour', dislikedFlavor: 'Bitter' },
    { name: 'Timid', increasedStat: 'Speed', decreasedStat: 'Attack', favoriteFlavor: 'Sweet', dislikedFlavor: 'Spicy' },
    { name: 'Hasty', increasedStat: 'Speed', decreasedStat: 'Defense', favoriteFlavor: 'Sweet', dislikedFlavor: 'Sour' },
    { name: 'Serious', increasedStat: null, decreasedStat: null, favoriteFlavor: null, dislikedFlavor: null },
    { name: 'Jolly', increasedStat: 'Speed', decreasedStat: 'SpAttack', favoriteFlavor: 'Sweet', dislikedFlavor: 'Dry' },
    { name: 'Naive', increasedStat: 'Speed', decreasedStat: 'SpDefense', favoriteFlavor: 'Sweet', dislikedFlavor: 'Bitter' },
    { name: 'Modest', increasedStat: 'SpAttack', decreasedStat: 'Attack', favoriteFlavor: 'Dry', dislikedFlavor: 'Spicy' },
    { name: 'Mild', increasedStat: 'SpAttack', decreasedStat: 'Defense', favoriteFlavor: 'Dry', dislikedFlavor: 'Sour' },
    { name: 'Quiet', increasedStat: 'SpAttack', decreasedStat: 'Speed', favoriteFlavor: 'Dry', dislikedFlavor: 'Sweet' },
    { name: 'Bashful', increasedStat: null, decreasedStat: null, favoriteFlavor: null, dislikedFlavor: null },
    { name: 'Rash', increasedStat: 'SpAttack', decreasedStat: 'SpDefense', favoriteFlavor: 'Dry', dislikedFlavor: 'Bitter' },
    { name: 'Calm', increasedStat: 'SpDefense', decreasedStat: 'Attack', favoriteFlavor: 'Bitter', dislikedFlavor: 'Spicy' },
    { name: 'Gentle', increasedStat: 'SpDefense', decreasedStat: 'Defense', favoriteFlavor: 'Bitter', dislikedFlavor: 'Sour' },
    { name: 'Sassy', increasedStat: 'SpDefense', decreasedStat: 'Speed', favoriteFlavor: 'Bitter', dislikedFlavor: 'Sweet' },
    { name: 'Careful', increasedStat: 'SpDefense', decreasedStat: 'SpAttack', favoriteFlavor: 'Bitter', dislikedFlavor: 'Dry' },
    { name: 'Quirky', increasedStat: null, decreasedStat: null, favoriteFlavor: null, dislikedFlavor: null }
]

export const getBoxes = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    let { data, error } = await supabase.from('boxes').select('*')

    return res.status(200).json({
        data
    })
}

export default async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const messageID = req.headers['twitch-eventsub-message-id']
    const messageTime = req.headers['twitch-eventsub-message-timestamp']
    const messageSignature = req.headers['twitch-eventsub-message-signature']
    const timestamp = Math.floor(new Date().getTime() / 1000)

    if (Math.abs(timestamp - messageTime) > 600) {
        console.log(`Verification Failed: timestamp > 10 minutes. Message Id: ${messageId}.`)
        return res.status(401).json({ error: 'Not Allowed' })
    }

    const rawBody = Buffer.from(JSON.stringify(req.body)).toString('utf8')
    const computedSignature = "sha256=" + crypto.createHmac("sha256", process.env.TWITCH_HUB_SECRET).update(messageID + messageTime + rawBody).digest("hex")

    if (messageSignature !== computedSignature) {
        console.log("INVALID SIGNATURE")
        return res.status(401).json({ error: "Invalid Signature" })
    } else {
        console.log("Successful Verification")
        res.status(200).json({ success: "OK" })
    }

    let { eventTrack } = await supabase.from('eventTrack').select('*')
    console.log({ eventTrack })
    if (eventTrack) {
        console.log(messageID)
        let trackCheck = eventTrack.find(track => track.trackingID === messageID)
        console.log(trackCheck)
        if (trackCheck) {
            console.log("ID already exists")
            return res.status(200).json({ error: 'ID already exists' })
        } else {
            await supabase.from('eventTrack').insert([{ trackingID: messageID }])
        }
    } else {
        await supabase.from('eventTrack').insert([{ trackingID: messageID }])
    }


    //const chain = Math.floor(Math.random() * (EVOLUTION_CHAINS) + 1)

    //const evolutionChain = await getEvolutionChain(chain)
    //const pokemon = await getPokemon(evolutionChain.chain.species.name)

    const player = req.body.event.user_login

    let { boxes } = await supabase.from('boxes').select('*')
    console.log({ boxes })
    if (boxes) {
        boxes.forEach((box) => {
            if (box.pokemon.find(p => p.currentTrainer === player)) {
                console.log("PLAYER EXISTS")
                return res.status(200).json({ error: 'Player already exists' })
            }
        })
    }


    const maxPokemon = Math.floor(Math.random() * (MAX_POKEMON) + 1)
    const pokemon = await getPokemon(maxPokemon)

    const level = Math.floor(Math.random() * (MAX_LEVEL) + 1)

    const ability = Math.floor(Math.random() * pokemon.abilities.length)
    const hpIV = Math.floor(Math.random() * (31) + 1)
    const attackIV = Math.floor(Math.random() * (31) + 1)
    const defenseIV = Math.floor(Math.random() * (31) + 1)
    const spAttackIV = Math.floor(Math.random() * (31) + 1)
    const spDefenseIV = Math.floor(Math.random() * (31) + 1)
    const speedIV = Math.floor(Math.random() * (31) + 1)

    const shiny = Math.random() <= (100 / 8192)

    const nature = NATURES[Math.floor(Math.random() * NATURES.length)]
    const natureMod = await getNature(nature)

    const stats = {
        hp: {
            iv: hpIV,
            ev: 0,
            stat: await getHealthStat(pokemon.stats[0].base_stat, hpIV, level, 0),
            base_stat: pokemon.stats[0].base_stat
        },
        attack: {
            iv: attackIV,
            ev: 0,
            stat: await getStat(pokemon.stats[1].base_stat, attackIV, level, natureMod.attack, 0),
            base_stat: pokemon.stats[1].base_stat
        },
        defense: {
            iv: defenseIV,
            ev: 0,
            stat: await getStat(pokemon.stats[2].base_stat, defenseIV, level, natureMod.defense, 0),
            base_stat: pokemon.stats[2].base_stat
        },
        spAttack: {
            iv: spAttackIV,
            ev: 0,
            stat: await getStat(pokemon.stats[3].base_stat, spAttackIV, level, natureMod.spAttack, 0),
            base_stat: pokemon.stats[3].base_stat
        },
        spDefense: {
            iv: spDefenseIV,
            ev: 0,
            stat: await getStat(pokemon.stats[4].base_stat, spDefenseIV, level, natureMod.spDefense, 0),
            base_stat: pokemon.stats[4].base_stat
        },
        speed: {
            iv: speedIV,
            ev: 0,
            stat: await getStat(pokemon.stats[5].base_stat, speedIV, level, natureMod.speed, 0),
            base_stat: pokemon.stats[5].base_stat
        }
    }

    const moves = []
    if (pokemon.moves.length > 4) {
        for (let i = 0; i < 4; i++) {
            moves.push({ ...pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move })
        }
    } else {
        for (let i = 0; i < pokemon.moves.length; i++) {
            moves.push({ ...pokemon.moves[i].move })
        }
    }

    const berry = await getBerry(Math.floor(Math.random() * (MAX_BERRIES) + 1))

    const pokemonData = {
        egg: false,
        name: pokemon.name,
        nickname: null,
        ability: pokemon.abilities[ability].name,
        id: pokemon.id,
        level: level,
        shiny,
        typeOne: pokemon.types[0].type.name,
        typeTwo: pokemon.types.length > 1 ? pokemon.types[1].type.name : null,
        stats,
        moves,
        itemHeld: berry.name,
        status: 'healthy',
        ribbons: [],
        nature,
        currentTrainer: player,
        originalTrainer: player,
        pokeball: POKE_BALLS[Math.floor(Math.random() * POKE_BALLS.length)],
        sprite: shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default,
        artwork: pokemon.sprites.other["official-artwork"].front_default
    }

    if (boxes) {
        let activeBox = boxes.find(box => box.pokemon.length < 30)
        if (activeBox) {
            activeBox.push(pokemonData)
            await supabase.from('boxes').update(activeBox).eq('id', activeBox.id)
        } else {
            await supabase.from('boxes').insert([{ name: 'Poke Box', pokemon: [pokemonData] }])
        }
    } else {
        await supabase.from('boxes').insert([{ name: 'Poke Box', pokemon: [pokemonData] }])
    }

    return res.status(200).json({
        pokemon: pokemonData
    })
}

const getEvolutionChain = async (chain) => {
    return await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/evolution-chain/${chain}`,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.data)
        .catch(err => err)
}

const getPokemon = async (chain) => {
    return await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${chain}`,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.data)
        .catch(err => err)
}

const getBerry = async (berryID) => {
    return await axios({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/berry/${berryID}`,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.data)
        .catch(err => err)
}

const getStat = async (base, iv, level, nature, ev = 0) => {
    return Math.floor(Math.floor((2 * base + iv + ev) * level / 100 + 5) * nature)
}

const getHealthStat = async (base, iv, level, ev = 0) => {
    return Math.floor((2 * base + iv + ev) * level / 100 + level + 10)
}

const getNature = async (nature) => {
    return {
        attack: nature.increasedStat === 'Attack' ? 1.1 : nature.decreasedStat === 'Attack' ? 0.9 : 1,
        defense: nature.increasedStat === 'Defense' ? 1.1 : nature.decreasedStat === 'Defense' ? 0.9 : 1,
        spAttack: nature.increasedStat === 'SpAttack' ? 1.1 : nature.decreasedStat === 'SpAttack' ? 0.9 : 1,
        spDefense: nature.increasedStat === 'SpDefense' ? 1.1 : nature.decreasedStat === 'SpDefense' ? 0.9 : 1,
        speed: nature.increasedStat === 'Speed' ? 1.1 : nature.decreasedStat === 'Speed' ? 0.9 : 1
    }
}