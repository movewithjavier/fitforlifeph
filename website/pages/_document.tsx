import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary SEO Meta Tags */}
        <meta name="description" content="Expert-led corporate wellness webinars and workshops in the Philippines. Transform your workplace with professional health training, employee wellness workshops, and expert corporate wellness speaker services. Serving Manila, Cebu, and nationwide. Book expert speaker today!" />
        <meta name="keywords" content="corporate wellness webinars Philippines, workplace wellness workshops Manila, employee health webinars Philippines, corporate wellness training Philippines, workplace wellness expert Philippines, corporate wellness speaker Philippines, workplace wellness consultant Manila, employee wellness workshops Philippines" />
        <meta name="author" content="FitForLife.ph" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f7f7f7" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fitforlife.ph" />
        
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="FitForLife.ph – Expert Corporate Wellness Webinars & Workshops Philippines | Workplace Health Training" />
        <meta property="og:description" content="Transform your workplace with expert-led corporate wellness webinars and one-day workshops in the Philippines. Professional health training and wellness workshops for Manila, Cebu, and nationwide companies." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fitforlife.ph/og-image.jpg" />
        <meta property="og:url" content="https://fitforlife.ph" />
        <meta property="og:site_name" content="FitForLife.ph" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FitForLife.ph – Expert Corporate Wellness Webinars & Workshops Philippines" />
        <meta name="twitter:description" content="Expert-led workplace wellness webinars and workshops in the Philippines. Transform employee health and productivity with our professional corporate wellness training." />
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
