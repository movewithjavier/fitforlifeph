import NavBar from '../components/NavBar';
import HeroSection from '../components/index/HeroSection';
import ServicesSection from '../components/index/ServicesSection';
import FeaturesSection from '../components/index/FeaturesSection';
import FAQSection from '../components/index/FAQSection';
import ContactSection from '../components/index/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
