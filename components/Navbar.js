"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Languages } from "lucide-react";
import Image from "next/image";

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

      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop: Logo + Actions Row */}
          <div className="hidden lg:flex items-center justify-between py-6 min-h-[180px]">
            {/* Left: WhatsApp */}
            <a
              href="https://wa.me/919523534038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="relative w-80 h-40">
                <Image
                  src="/logo.jpg"
                  alt="MedValley - Healing Starts Here"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right: Language + Translate */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
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
                className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Translate
              </button>
            </div>
          </div>

          {/* Desktop: Menu Links Row */}
          <div className="hidden lg:flex items-center justify-center gap-1 py-3 border-t border-gray-100 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: Logo + Actions Row */}
          <div className="flex lg:hidden items-center justify-between py-4">
            {/* Left: Language + Translate */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-50 rounded-lg px-2 py-1.5">
                <Languages className="w-4 h-4 text-indigo-600" />
                <select
                  value={selectedLang}
                  onChange={(e) => setSelectedLang(e.target.value)}
                  className="bg-transparent text-xs font-medium text-gray-700 focus:outline-none"
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
                className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-3 py-1.5 rounded-lg text-xs font-medium"
              >
                Translate
              </button>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="relative w-32 h-16 sm:w-40 sm:h-20">
                <Image
                  src="/logo.jpg"
                  alt="MedValley"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right: WhatsApp + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/919523534038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
              >
                <Phone className="w-4 h-4" />
              </a>
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

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
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
          </div>
        </div>
      </nav>
    </>
  );
}
