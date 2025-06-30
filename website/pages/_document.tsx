import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary SEO Meta Tags */}
        <meta name="description" content="Leading corporate wellness solutions in the Philippines. Transform your workplace with expert health programs, employee wellness initiatives, and workplace wellness consulting. Serving Manila, Cebu, and nationwide. Book free consultation today!" />
        <meta name="keywords" content="corporate wellness Philippines, workplace wellness programs Manila, employee health programs Philippines, corporate fitness Philippines, workplace wellness solutions, employee wellness Philippines, corporate health programs Manila, workplace wellness consulting" />
        <meta name="author" content="FitForLife.ph" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f7f7f7" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fitforlife.ph" />
        
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="FitForLife.ph – #1 Corporate Wellness Solutions Philippines | Workplace Health Programs" />
        <meta property="og:description" content="Transform your workplace with our comprehensive corporate wellness programs in the Philippines. Expert health coaching, fitness programs, and wellness consulting for Manila, Cebu, and nationwide companies." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fitforlife.ph/og-image.jpg" />
        <meta property="og:url" content="https://fitforlife.ph" />
        <meta property="og:site_name" content="FitForLife.ph" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FitForLife.ph – Corporate Wellness Solutions Philippines" />
        <meta name="twitter:description" content="Leading workplace wellness programs in the Philippines. Transform employee health and productivity with our expert corporate wellness solutions." />
        <meta name="twitter:image" content="https://fitforlife.ph/twitter-image.jpg" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.placename" content="Manila, Philippines" />
        <meta name="geo.position" content="14.5995;120.9842" />
        <meta name="ICBM" content="14.5995, 120.9842" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
