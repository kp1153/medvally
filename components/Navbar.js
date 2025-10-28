"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Languages } from "lucide-react";

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [widgetReady, setWidgetReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img
                  src="/logo.jpg"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500 ring-offset-2 group-hover:ring-teal-500 transition-all duration-300"
                  alt="Medvalley"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                  Medvalley
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  International Healthcare
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Actions */}
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
              <Link
                href="https://wa.me/919523534038"
                target="_blank"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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

        {/* Mobile Menu */}
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

              <Link
                href="https://wa.me/919523534038"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}