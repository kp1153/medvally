"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Languages } from "lucide-react";

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [widgetReady, setWidgetReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let tries = 0;
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        setWidgetReady(true);
        clearInterval(interval);
      } else if (tries > 40) {
        clearInterval(interval);
      }
      tries++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleTranslate = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = selectedLang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#treatments", label: "Treatments" },
    { href: "#hospitals", label: "Hospitals" },
    { href: "#patient-stories", label: "Stories" },
    { href: "#health-tips", label: "Health Tips" },
    { href: "#cost", label: "Cost Estimate" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div
        id="google_translate_element"
        style={{ position: "absolute", opacity: 0, zIndex: -1 }}
      />

      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* First Line - Logo Only */}
          <div className="flex items-center justify-center py-6 border-b border-gray-100">
            <div className="group cursor-pointer">
              <div className="relative">
                {/* Logo Card */}
                <div className="bg-blue-900 rounded-2xl p-6 sm:p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  {/* Arabic Text */}
                  <div className="text-center mb-1">
                    <h1
                      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
                      style={{ fontFamily: "serif", direction: "rtl" }}
                    >
                      ميڊ ويلي
                    </h1>
                  </div>

                  {/* English Text */}
                  <div className="text-center mb-2">
                    <h2 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
                      MedValley
                    </h2>
                  </div>

                  {/* Decorative Line */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-1 flex-1 bg-yellow-300 rounded"></div>
                    <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                    <div className="h-1 flex-1 bg-yellow-300 rounded"></div>
                  </div>

                  {/* Tagline */}
                  <div className="text-center">
                    <p className="text-yellow-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                      Healing Starts Here
                    </p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Second Line - Only Actions + Hamburger */}
          <div className="flex items-center justify-between h-16">
            <div></div>

            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="hidden sm:flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <Languages className="w-4 h-4 text-indigo-600" />
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
                >
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                  <option value="ru">RU</option>
                  <option value="fr">FR</option>
                  <option value="bn">BN</option>
                  <option value="fa">FA</option>
                </select>
              </div>

              <button
                disabled={!widgetReady}
                onClick={handleTranslate}
                className="hidden sm:block bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Translate
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919523534038"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[600px] border-t" : "max-h-0"
          }`}
        >
          <div className="bg-white px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 space-y-3 border-t">
              <div className="flex items-center gap-2 px-4">
                <Languages className="w-4 h-4 text-indigo-600" />
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="ru">Russian</option>
                  <option value="fr">French</option>
                  <option value="bn">Bengali</option>
                  <option value="fa">Persian</option>
                </select>
              </div>

              <button
                disabled={!widgetReady}
                onClick={handleTranslate}
                className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                Translate
              </button>

              <a
                href="https://wa.me/919523534038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
