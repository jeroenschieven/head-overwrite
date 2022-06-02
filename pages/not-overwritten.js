import Head from 'next/head'
import styles from '../styles/Home.module.css'
import parseHead from '../utils/parseHead';

const YoastHead = `
<!-- This site is optimized with the Yoast SEO plugin v18.9 - https://yoast.com/wordpress/plugins/seo/ -->
<meta name="description" content="Test description" />
<meta property="og:locale" content="nl_NL" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Test - test.test" />
<meta property="og:description" content="Test description" />
<meta property="og:url" content="https://test.test" />
<meta property="og:site_name" content="test.test" />
<meta property="article:publisher" content="https://www.facebook.com/test.test" />
<meta property="article:modified_time" content="2022-05-31T13:15:41+00:00" />
<meta property="og:image" content="test.test/image" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://test.test/#organization","name":"test.test","url":"https://test.test","sameAs":["https://www.facebook.com/test.tes"],"logo":{"@type":"ImageObject","inLanguage":"nl","@id":"https://test.test/#/schema/logo/image/","url":"https://test.test/image.png","contentUrl":"https://test.test/image.png","width":1200,"height":380,"caption":"test.test"},"image":{"@id":"test.test"}},{"@type":"WebSite","@id":"test.test/#website","url":"https://test.test/","name":"test.test","description":"test description","publisher":{"@id":"https://test.test/#organization"},"inLanguage":"nl"},{"@type":"ImageObject","inLanguage":"nl","@id":"https://test.test#primaryimage","url":"https://test.test","contentUrl":"https://test.test"},{"@type":"WebPage","@id":"https://test.test/#webpage","url":"https://test.test/","name":"test.test","isPartOf":{"@id":"https://test.test/#website"},"primaryImageOfPage":{"@id":"https://test.test/#primaryimage"},"datePublished":"2022-05-10T10:02:17+00:00","dateModified":"2022-05-31T13:15:41+00:00","description":"test description","breadcrumb":{"@id":"https://test.tests/#breadcrumb"},"inLanguage":"nl","potentialAction":[{"@type":"ReadAction","target":["https://test.test"]}]},{"@type":"BreadcrumbList","@id":"https://test.test/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://test.test"},{"@type":"ListItem","position":2,"name":"Test"}]}]}</script>
<!-- / Yoast SEO plugin. -->
`;

export default function NotOverwritten() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Head is overwritten</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {parseHead(YoastHead)}
      </Head>
      <div>
        <h1>Head is Not overwritten</h1>
        <p>meta properties and yoast script still in head</p>
      </div>
    </div>
  )
}
