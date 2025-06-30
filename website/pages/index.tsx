import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/index/HeroSection';
import ServicesSection from '../components/index/ServicesSection';
import FeaturesSection from '../components/index/FeaturesSection';
import FAQSection from '../components/index/FAQSection';
import ContactSection from '../components/index/ContactSection';
import Footer from '../components/Footer';
import StructuredData from '../components/SEO/StructuredData';

export default function Home() {
  return (
    <>
      <Head>
        <title>FitForLife.ph – #1 Corporate Wellness Solutions Philippines | Workplace Health Programs</title>
        <meta name="description" content="Transform your workplace with our comprehensive corporate wellness programs in the Philippines. Expert health coaching, fitness programs, and wellness consulting for Manila, Cebu, and nationwide companies. Book free consultation today!" />
        <meta name="keywords" content="corporate wellness Philippines, workplace wellness programs Manila, employee health programs Philippines, corporate fitness Philippines, workplace wellness solutions, employee wellness Philippines, corporate health programs Manila, workplace wellness consulting" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://fitforlife.ph" />
        
        {/* Open Graph for this specific page */}
        <meta property="og:title" content="FitForLife.ph – #1 Corporate Wellness Solutions Philippines | Workplace Health Programs" />
        <meta property="og:description" content="Transform your workplace with our comprehensive corporate wellness programs in the Philippines. Expert health coaching, fitness programs, and wellness consulting for Manila, Cebu, and nationwide companies." />
        <meta property="og:url" content="https://fitforlife.ph" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="FitForLife.ph – Corporate Wellness Solutions Philippines" />
        <meta name="twitter:description" content="Leading workplace wellness programs in the Philippines. Transform employee health and productivity with our expert corporate wellness solutions." />
      </Head>
      
      {/* Structured Data */}
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <StructuredData type="service" />
      
      <div>
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
