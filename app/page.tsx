import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import MessageSection from "./components/MessageSection";
import EcosystemSection from "./components/EcosystemSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <EcosystemSection />
      <MessageSection />
      <ContactSection />
      <Footer />
    </>
  );
}
