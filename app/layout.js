import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Medvalley - International Medical Tourism",
  description: "Trusted medical tourism company in India for Middle East, Africa & CIS patients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
