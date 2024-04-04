import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <>
      <Head>
      	<meta data-react-helmet="true" name="robots" content="index"/>
        <link rel="icon" href="/images/Logo-B-NoCircle-BG-Removed.png" type="image/x-icon"/>
        <meta charset="UTF-8"/>
        <meta name="author" content="Benjamin Simon"/>
        <meta name="description" content="Portfolio of Benjamin Simon, french developer, showcasing my projects and skills in web development." />
	      <meta name="keywords" content="portfolio, front-end, france, next, JS, next.JS, react, react.JS, design, development, programming, code, coding"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	      <meta name="Cache-Control" content="max-age=50000"/>
        <meta name="theme-color" content="#121212"/>

        <meta property="og:title" content="Benjamin Simon - Portfolio"/>
        <meta property="og:description" content="Portfolio of Benjamin Simon, french developer, showcasing my projects and skills in web development."/>
        <meta property="og:image" content="/images/Logo-B-NoCircle-BG-Removed.png"/>
        <meta property="og:image" content="/images/benji.png"/>
        <meta property="og:url" content="https://benjamin-simon.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Benjamin Simon - Portfolio"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:locale:alternate" content="fr_FR"/>

        <meta name="msapplication-TileColor" content="#121212"/>
        <meta name="msapplication-TileImage" content="/images/Logo-B-NoCircle-BG-Removed.png"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#121212"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Benjamin Simon - Portfolio"/>
        <meta name="application-name" content="Benjamin Simon - Portfolio"/>

        <meta name="mobile-web-app-capable" content="yes"/>

        <meta name="googlebot" content="noindex"/>
        <meta name="googlebot" content="notranslate"/>
        <meta name="googlebot-news" content="noindex"/>
        <meta name="google-site-verification" content="4704C3GEL0FlD2HgLYIuHB22FS1BiuSHGj4beQslYI8" />

        <title> Benjamin Simon - Portfolio</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
