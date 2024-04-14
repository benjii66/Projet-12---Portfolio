import AboutSection from "./components/About/AboutSection";
import AchievementsSection from "./components/Achievements/AchievementsSection";
import EmailSection from "./components/Contact/EmailSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/common/Footer";
import Navbar from "./components/navigation/Navbar";
import ProjectsSections from "./components/projects/ProjectsSections";
import RootLayout from "./layout";
import useTranslation from "next-translate/useTranslation";







export default function Home() {

  const { t } = useTranslation("meta");

  return (
    <head>
      <meta data-react-helmet="true" name="robots" content="index" />
      <link rel="icon" type="image/x-icon" href="./images/Logo-B-NoCircle-BG-Removed.png" sizes="16x16"/>
      <meta charSet="UTF-8" />
      <meta name="author" content="Benjamin Simon" />
      <meta name="description" content={t("description")} />
      <meta name="keywords" content={t("keywords")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Cache-Control" content="max-age=50000" />
      <meta name="theme-color" content="#121212" />

      <meta property="og:title" content="Benjamin Simon - Portfolio" />
      <meta property="og:description" content={t("description")} />
      <meta property="og:image" content="./images/Logo-B-NoCircle-BG-Removed.png" />
      <meta property="og:url" content="https://benjamin-simon.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Benjamin Simon - Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      <meta name="msapplication-TileColor" content="#121212" />
      <meta name="msapplication-TileImage" content="./images/Logo-B-NoCircle-BG-Removed.png" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#121212" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Benjamin Simon - Portfolio" />
      <meta name="application-name" content="Benjamin Simon - Portfolio" />

      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BenjaminSimon" />
      <meta name="twitter:creator" content="@BenjaminSimon" />
      <meta name="twitter:title" content="Benjamin Simon - Portfolio" />
      <meta name="twitter:description" content={t("description")} />
      <meta name="twitter:image" content="./images/Logo-B-NoCircle-BG-Removed.png" />
      <meta name="twitter:url" content="https://benjamin-simon.vercel.app" />


      <meta name="google" content="nositelinksearchbox" />
      <meta name="googlebot" content="noindex" />
      <meta name="googlebot" content="notranslate" />
      <meta name="googlebot-news" content="noindex" />
      <meta name="google-site-verification" content="4704C3GEL0FlD2HgLYIuHB22FS1BiuSHGj4beQslYI8" />

      <title> Benjamin Simon - Portfolio</title>

      <RootLayout>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container m-24 mx-auto px-12 py-4">
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSections />
            <EmailSection />
          </div>
          <Footer />
        </main>
      </RootLayout>
    </head>
  );
}
