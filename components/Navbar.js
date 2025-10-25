"use client";
import { useEffect } from "react";

export default function Navbar() {

  // Load Google Translate Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar,ru,fr,bn,fa",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Force Language Switch + RTL Support
  const changeLanguage = (lang) => {
    const applyLang = () => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));

        // RTL Layout for Arabic & Persian
        if (lang === "ar" || lang === "fa") {
          document.body.dir = "rtl";
        } else {
          document.body.dir = "ltr";
        }
      } else {
        setTimeout(applyLang, 300);
      }
    };
    applyLang();
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <header className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-white shadow">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Medvalley" className="w-14 h-14 rounded-full shadow" />
          <div>
            <h1 className="text-xl font-bold text-indigo-700">Medvalley</h1>
            <p className="text-sm text-teal-600">International Healthcare, Indian Hospitality</p>
          </div>
        </div>

        {/* Language Buttons */}
        <div className="flex gap-2 mt-3 sm:mt-0">
          <button onClick={() => changeLanguage("en")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">EN</button>
          <button onClick={() => changeLanguage("ar")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">AR</button>
          <button onClick={() => changeLanguage("ru")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">RU</button>
          <button onClick={() => changeLanguage("fr")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">FR</button>
          <button onClick={() => changeLanguage("bn")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">BN</button>
          <button onClick={() => changeLanguage("fa")} className="px-2 font-semibold text-gray-700 hover:text-indigo-700">FA</button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="flex flex-wrap justify-center gap-6 py-3 bg-gray-50 border-t">
        <a href="#home" className="text-indigo-700 font-medium hover:underline">Home</a>
        <a href="#treatments" className="text-teal-700 font-medium hover:underline">Treatments</a>
        <a href="#hospitals" className="text-indigo-700 font-medium hover:underline">Hospitals</a>
        <a href="#doctors" className="text-teal-700 font-medium hover:underline">Doctors</a>
        <a href="#cost" className="text-indigo-700 font-medium hover:underline">Cost Estimate</a>
        <a href="#patient-stories" className="text-teal-700 font-medium hover:underline">Patient Stories</a>
        <a href="#about" className="text-indigo-700 font-medium hover:underline">About Us</a>
        <a href="#contact" className="text-teal-700 font-medium hover:underline">Contact</a>
      </nav>
    </>
  );
}
