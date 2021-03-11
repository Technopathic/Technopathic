function getAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, "").replace(/\index$/, ""),
        module: r(fileName)
    })).sort((a, b) => new Date(b.module.meta.date) - new Date(a.module.meta.date))
}

export const posts = getAll(
    require.context("./pages/", true, /\index.mdx$/)
)