// React Components
import Head from 'next/head'
import GoogleAnalytics from 'next-simple-google-analytics'


export default function CustomHead(page) {
  return (
    <Head>
      <title>{page.title}</title>
      <meta property="og:title" content={page.title} />
      <meta property="og:url" content={page.url} />
      <meta property="og:description" content={page.description} />
      <meta property="og:type" content={page.type} />
      <meta property="og:image" content={page.image} />
      <meta property="og:image:secure_url" content={page.image} />
      <meta property="og:image:type" content={page.imageType} />
      <meta name="description" content={page.description} />
      <link rel="canonical" href={page.url}></link>
      <meta name="robots" content={page.robots} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" href="images/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="images/icons/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="images/icons/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="images/icons/touch-icon-ipad-retina.png" />
      <GoogleAnalytics id="G-WT3YRZWJZV" />
    </Head>
  )
}