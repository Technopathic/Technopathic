import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang={process.env.APP_LOCALE}>
                <Head>
                    <meta name="description" content={process.env.APP_DESCRIPTION} />

                    <link rel="apple-touch-icon" sizes="180x180" href={process.env.APP_APPLE_TOUCH_ICON} />
                    <link rel="icon" type="image/png" sizes="16x16" href={process.env.APP_FAVICON_16x16} />
                    <link rel="icon" type="image/png" sizes="32x32" href={process.env.APP_FAVICON_32x32} />

                    <meta name="og:title" property="og:title" content={process.env.APP_TITLE} />
                    <meta property="og:site_name" content={process.env.APP_SITE_NAME} />
                    <meta property="og:locale" content={process.env.APP_LOCALE} />
                    <meta property="og:type" content={process.env.APP_TYPE} />
                    <meta name="og:description" property="og:description" content={process.env.APP_DESCRIPTION} />
                    <meta name="og:url" property="og:url" content={process.env.APP_URL} />
                    <meta name="og:image" property="og:image" content={process.env.APP_IMAGE} />
                    <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_IMAGE} />
                    <meta property="og:image:type" content={process.env.APP_IMAGE_TYPE} />
                    <meta property="og:image:width" content={process.env.APP_IMAGE_WIDTH} />
                    <meta property="og:image:height" content={process.env.APP_IMAGE_HEIGHT} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument