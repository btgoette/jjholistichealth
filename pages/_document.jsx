import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en' prefix="og: https://ogp.me/ns#">
                <Head>
                    <script id="mcjs"
                        dangerouslySetInnerHTML={{
                            __html: `
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/26cc1cf609fa59ee733447334/0f846cee7d272f27a613356f5.js");
        `,
                        }}
                    />
                </Head>
                <body>
                    <div id="overlays"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;