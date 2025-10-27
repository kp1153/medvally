"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  }, []);

  const handleTranslate = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = selectedLang;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{ position: "absolute", opacity: 0, zIndex: -1 }}
      />

      <nav className="bg-white border-b shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              className="w-16 h-16 rounded-full object-cover"
              alt="Medvalley logo"
            />
            <div>
              <h1 className="text-indigo-700 text-2xl font-extrabold">
                Medvalley
              </h1>
              <p className="text-teal-600 text-sm">
                International Healthcare, Indian Hospitality
              </p>
            </div>
          </div>

          {/* Translation & WhatsApp Section */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded text-sm"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="ru">Russian</option>
              <option value="fr">French</option>
              <option value="bn">Bengali</option>
              <option value="fa">Persian</option>
            </select>

            <button
              disabled={!widgetReady}
              onClick={handleTranslate}
              className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm shadow"
            >
              Translate
            </button>

            <Link
              href="https://wa.me/919523534038"
              target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm shadow"
            >
              WhatsApp Us
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/All Size Menu */}
        {menuOpen && (
          <div className="bg-gray-50 border-t">
            <div className="flex flex-col px-6 py-4 space-y-3">
              <a
                href="#home"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#treatments"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Treatments
              </a>
              <a
                href="#hospitals"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Hospitals
              </a>
              <a
                href="#patient-stories"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#health-tips"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Health Tips
              </a>
              <a
                href="#cost"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Cost Estimate
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
