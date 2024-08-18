import HeroSection from '../components/HeroSection';
import {useTranslations} from 'next-intl';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

export default function Home() {
  const t = useTranslations('Index');

  const navLinks = [
    {
        title: t("navbar.about"),
        path: "#about"
    },
    {
        title: t("navbar.projects"),
        path: "#projects"
    },
    {
        title: t("navbar.contact"),
        path: "#contact"
    }
  ];

  const aboutSectionContent = {
    title: t("aboutSection.title"),
    description: t("aboutSection.description"),
    spanSkill: t("aboutSection.spanSkill"),
    spanEducation: t("aboutSection.spanEducation"),
    spanExperience: t("aboutSection.spanExperience"),
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar navLinks={navLinks} />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection content={aboutSectionContent} />
      </div>
    </main>
  );
}
