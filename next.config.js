const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

const env = {
    "APP_APPLE_TOUCH_ICON": "/favicon128.png",
    "APP_FAVICON_16x16": "/favicon32.png",
    "APP_FAVICON_32x32": "/favicon16.png",

    "APP_TITLE": "NowNano - Live Coding and Software Development",
    "APP_DESCRIPTION": "Independent software developer and live coder. Turning my passion projects into my career.",
    "APP_TYPE": "website",
    "APP_URL": "https://nownano.tv",
    "APP_IMAGE": "",
    "APP_IMAGE_TYPE": "image/png",
    "APP_IMAGE_WIDTH": "1200",
    "APP_IMAGE_HEIGHT": "630",
    "APP_SITE_NAME": "NowNano",
    "APP_LOCALE": "en",

    "INSTAGRAM": "https://www.instagram.com/NowNano/",
    "TWITTER": "https://twitter.com/NowNanoTV",
    "GITHUB": "https://github.com/Technopathic",
    "TWITCH": "https://twitch.tv/NowNano",

    "SHOW_LINE_NUMBERS": true
}
  
module.exports = withMDX({
    env,
    pageExtensions: ["js", "jsx", "md", "mdx"]
})