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
        <title>FitForLife.ph – Expert Corporate Wellness Webinars & Workshops Philippines | Workplace Health Training</title>
        <meta name="description" content="Transform your workplace with expert-led corporate wellness webinars and one-day workshops in the Philippines. Professional health training and wellness workshops for Manila, Cebu, and nationwide companies. Book expert speaker today!" />
        <meta name="keywords" content="corporate wellness webinars Philippines, workplace wellness workshops Manila, employee health webinars Philippines, corporate wellness training Philippines, workplace wellness expert Philippines, corporate wellness speaker Philippines, workplace wellness consultant Manila, employee wellness workshops Philippines" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://fitforlife.ph" />
        
        {/* Open Graph for this specific page */}
        <meta property="og:title" content="FitForLife.ph – Expert Corporate Wellness Webinars & Workshops Philippines | Workplace Health Training" />
        <meta property="og:description" content="Transform your workplace with expert-led corporate wellness webinars and one-day workshops in the Philippines. Professional health training and wellness workshops for Manila, Cebu, and nationwide companies." />
        <meta property="og:url" content="https://fitforlife.ph" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content="FitForLife.ph – Expert Corporate Wellness Webinars & Workshops Philippines" />
        <meta name="twitter:description" content="Expert-led workplace wellness webinars and workshops in the Philippines. Transform employee health and productivity with our professional corporate wellness training." />
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
