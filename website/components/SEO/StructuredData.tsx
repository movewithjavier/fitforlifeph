import Head from 'next/head';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'faq' | 'service';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FitForLife.ph",
          "url": "https://fitforlife.ph",
          "logo": "https://fitforlife.ph/logo.png",
          "description": "Expert corporate wellness speaker and workshop facilitator in the Philippines, helping companies create healthier workplaces through professional webinars and one-day workshops.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PH",
            "addressRegion": "Metro Manila"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+63-XXX-XXX-XXXX",
            "contactType": "customer service",
            "areaServed": "PH"
          },
          "sameAs": [
            "https://www.facebook.com/fitforlifeph",
            "https://www.linkedin.com/company/fitforlifeph"
          ]
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "FitForLife.ph",
          "description": "Expert corporate wellness speaker and workshop facilitator in the Philippines",
          "url": "https://fitforlife.ph",
          "telephone": "+63-XXX-XXX-XXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Manila",
            "addressRegion": "Metro Manila",
            "postalCode": "1000",
            "addressCountry": "PH"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 14.5995,
            "longitude": 120.9842
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "Country",
            "name": "Philippines"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Expert Corporate Wellness Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Wellness Webinars",
                  "description": "Expert-led corporate wellness webinars for companies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Workplace Wellness Workshops",
                  "description": "Professional one-day wellness workshops for employees"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Corporate Wellness Speaker",
                  "description": "Expert corporate wellness speaker services"
                }
              }
            ]
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What corporate wellness services do you offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer comprehensive workplace wellness programs including health assessments, fitness programs, mental health support, nutrition guidance, and wellness workshops tailored for Philippine companies."
              }
            },
            {
              "@type": "Question",
              "name": "How much do your corporate wellness programs cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our pricing varies based on company size and program scope. We offer customized solutions starting from ₱50,000 per month for small companies. Contact us for a free consultation and quote."
              }
            },
            {
              "@type": "Question",
              "name": "Do you serve companies outside Metro Manila?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide corporate wellness services throughout the Philippines. We offer both on-site and virtual programs to accommodate companies in different locations."
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Expert Corporate Wellness Webinars & Workshops",
          "description": "Expert-led corporate wellness webinars and one-day workshops designed for Philippine companies to improve employee health, productivity, and workplace culture.",
          "provider": {
            "@type": "Organization",
            "name": "FitForLife.ph"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Philippines"
          },
          "serviceType": "Expert Corporate Wellness Training",
          "category": "Professional Health Training"
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
} 