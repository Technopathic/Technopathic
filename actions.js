import axios from 'axios'

function getAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    })).sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))
}

export const posts = getAll(
    require.context("./pages/", true, /\index.mdx$/)
)

export const getBoxes = async () => {
    return await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/getBoxes',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.data)
}

export const getMemes = async () => {
    return await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/getMemes',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.data)
}

