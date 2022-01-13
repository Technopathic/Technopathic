const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

const env = {
    "APP_LOCALE": "en",
    "APP_APPLE_TOUCH_ICON": "/favicon128.png",
    "APP_FAVICON_16x16": "/favicon32.png",
    "APP_FAVICON_32x32": "/favicon16.png",

    "APP_TITLE": "NowNano - Live Coding and Software Development",
    "APP_DESCRIPTION": "Independent software developer and live coder. Turning my passion projects into my career.",
    "APP_TYPE": "website",
    "APP_URL": "https://nownano.tv",
    "APP_IMAGE": "https://nownano.tv/og-image.png",
    "APP_IMAGE_TYPE": "image/png",
    "APP_IMAGE_WIDTH": "1200",
    "APP_IMAGE_HEIGHT": "630",
    "APP_SITE_NAME": "NowNano",
    "APP_LOCALE": "en",

    "INSTAGRAM": "https://www.instagram.com/NowNano/",
    "TWITTER": "https://twitter.com/NowNanoTV",
    "GITHUB": "https://github.com/Technopathic",
    "TWITCH": "https://twitch.tv/NowNano",
    "DISCORD": "https://discord.gg/XTkwtcxW",
    "KO_FI": "https://ko-fi.com/nownano",
    "LINKEDIN": "https://www.linkedin.com/in/nsoharab/",
    "YOUTUBE": "https://www.youtube.com/channel/UCo43V_OXbehy7r2rUb5ZPsQ"
}

module.exports = withMDX({
    env,
    swcMinify: true,
    pageExtensions: ["js", "jsx", "md", "mdx"]
})