import AboutSection from "./components/About/AboutSection";
import AchievementsSection from "./components/Achievements/AchievementsSection";
import EmailSection from "./components/Contact/EmailSection";
import HeroSection from "./components/HeroSection";
import Footer from "./components/common/Footer";
import Navbar from "./components/navigation/Navbar";
import ProjectsSections from "./components/projects/ProjectsSections";




export default function Home() {
    return (
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
    );
  }
