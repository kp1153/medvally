import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.medvally.com"),
  title: {
    default:
      "MedValley - Best Medical Tourism in India | International Healthcare",
    template: "%s | MedValley Medical Tourism",
  },
  description:
    "Leading medical tourism company in India offering world-class healthcare for Middle East, Africa & CIS patients. Affordable treatments, top hospitals, complete care.",
  keywords: [
    "medical tourism India",
    "healthcare India",
    "medical treatment India",
    "affordable surgery India",
    "international patients India",
    "medical visa India",
    "best hospitals India",
    "cardiac surgery India",
    "orthopedic treatment India",
    "cancer treatment India",
    "Middle East patients",
    "African patients medical care",
    "CIS patients India",
    "medical tourism company",
  ],
  authors: [{ name: "MedValley" }],
  creator: "MedValley Medical Tourism",
  publisher: "MedValley",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ru_RU", "fr_FR", "bn_BD", "fa_IR"],
    url: "https://www.medvally.com",
    siteName: "MedValley Medical Tourism",
    title: "MedValley - Best Medical Tourism in India",
    description:
      "Trusted medical tourism company connecting international patients with India's top hospitals. Affordable, quality healthcare with complete support.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MedValley Medical Tourism India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedValley - Medical Tourism in India",
    description: "World-class medical care in India for international patients",
    images: ["/logo.jpg"],
    creator: "@medvalley",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.medvally.com",
    languages: {
      en: "https://www.medvally.com",
      ar: "https://www.medvally.com/ar",
      ru: "https://www.medvally.com/ru",
      fr: "https://www.medvally.com/fr",
      bn: "https://www.medvally.com/bn",
      fa: "https://www.medvally.com/fa",
    },
  },
  category: "Healthcare",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MedValley Medical Tourism",
    description: "Leading medical tourism company in India",
    url: "https://www.medvally.com",
    logo: "https://www.medvally.com/logo.jpg",
    image: "https://www.medvally.com/logo.jpg",
    telephone: "+91-9523534038",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
    },
    areaServed: ["Middle East", "Africa", "CIS Countries", "Worldwide"],
    medicalSpecialty: [
      "Cardiology",
      "Orthopedics",
      "Oncology",
      "Neurology",
      "Gastroenterology",
    ],
    priceRange: "$$",
    sameAs: [
      "https://facebook.com/medvalley",
      "https://twitter.com/medvalley",
      "https://instagram.com/medvalley",
      "https://linkedin.com/company/medvalley",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <Script id="gt-init" strategy="beforeInteractive">
          {`
            window.googleTranslateElementInit = function () {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ar,ru,fr,bn,fa',
                autoDisplay: false
              }, 'google_translate_element');
            };
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <style>{`
          .goog-te-banner-frame {display:none !important;}
          .goog-logo-link {display:none !important;}
          .goog-te-gadget {height:0 !important; overflow:hidden;}
          body { top:0px !important; }
        `}</style>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
