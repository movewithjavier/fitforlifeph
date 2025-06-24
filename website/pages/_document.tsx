import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content="Unlock your team's creative potential and build a culture of experimentation with Javier P Gomez. Workshops, coaching, and keynotes for high-performing teams." />
        <meta name="theme-color" content="#f7f7f7" />
        {/* Open Graph / Social Meta Tags */}
        <meta property="og:title" content="Javier P Gomez – Experimentation Coach & Facilitator" />
        <meta property="og:description" content="Unlock your team's creative potential and build a culture of experimentation with Javier P Gomez." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/hero-placeholder.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
