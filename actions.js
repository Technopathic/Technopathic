function getAll(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, ""),
        module: r(fileName)
    }));
}
  
export const posts = getAll(
    require.context("./pages/blog/", false, /\.mdx$/)
)