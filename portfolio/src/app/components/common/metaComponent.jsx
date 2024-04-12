import Head from 'next/head';
import useTranslation from "next-translate/useTranslation";

const MetaComponent = () => {

  const { t } = useTranslation("meta");

  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    "name": "Developpeur",
    "url": "https://benjamin-simon.vercel.app/",
    "logo": "../images/Logo-B-NoCircle-BG-Removed",
    "image": "../images/Logo-B-NoCircle-BG-Removed",
    "description": t("description"),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Le Soler",
      "addressRegion": "Occitanie",
      "postalCode": "66270",
      "addressCountry": "FR"
    },
  };

  return (
    <Head>
      	<meta data-react-helmet="true" name="robots" content="index"/>
        <link rel="icon" type="image/x-icon" href="../../images/Logo-B-NoCircle-BG-Removed" />
        <meta charset="UTF-8"/>
        <meta name="author" content="Benjamin Simon"/>
        <meta name="description" content={t("description")}/>
	      <meta name="keywords" content={t("keywords")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	      <meta name="Cache-Control" content="max-age=50000"/>
        <meta name="theme-color" content="#121212"/>

        <meta property="og:title" content="Benjamin Simon - Portfolio"/>
        <meta property="og:description" content={t("description")}/>
        <meta property="og:image" content="/images/Logo-B-NoCircle-BG-Removed.png"/>
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

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@BenjaminSimon"/>
        <meta name="twitter:creator" content="@BenjaminSimon"/>
        <meta name="twitter:title" content="Benjamin Simon - Portfolio"/>
        <meta name="twitter:description" content={t("description")}/>
        <meta name="twitter:image" content="/images/Logo-B-NoCircle-BG-Removed.png"/>
        <meta name="twitter:url" content="https://benjamin-simon.vercel.app"/>


        <meta name="google" content ="nositelinksearchbox"/>
        <meta name="googlebot" content="noindex"/>
        <meta name="googlebot" content="notranslate"/>
        <meta name="googlebot-news" content="noindex"/>
        <meta name="google-site-verification" content="4704C3GEL0FlD2HgLYIuHB22FS1BiuSHGj4beQslYI8" />

        <title> Benjamin Simon - Portfolio</title>
       
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}></script>
      </Head>
  );
}

export default MetaComponent;