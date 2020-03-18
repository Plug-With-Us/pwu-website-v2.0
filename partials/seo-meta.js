import Head from "next/head";
const Meta = props => (
  <Head>
    <title>PlugSend | Email Marketing</title>
    <meta
      name="description"
      content="Your new marketing platform coming soon, it's Plugsend"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="" />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <link rel="icon" type="image/png" href="favicon.ico" />
    <link rel="apple-touch-icon" href="favicon.ico" />
    <link rel="stylesheet" href="" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="" />
    <script type="text/javascript" src=""></script>
  </Head>
);
export default Meta;
