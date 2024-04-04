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
	      <meta name="Cache-Control" content="max-age=50000"/>
        <meta name="description" content="Portfolio of Benjamin Simon, showcasing my projects and skills in web development." />
	      <meta name="keywords" content="portfolio, front-end, france, next, JS, next.JS, react, react.JS, design, development, programming, code, coding"/>
        <meta name="author" content="Benjamin Simon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#121212"/>
        <meta name="msapplication-TileColor" content="#121212"/>
        <meta name="msapplication-TileImage" content="/images/Logo-B-NoCircle-BG-Removed.png"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#121212"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Benjamin Simon - Portfolio"/>
        <meta name="application-name" content="Benjamin Simon - Portfolio"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="googlebot" content="index"/>

        <title> Benjamin Simon - Portfolio</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
