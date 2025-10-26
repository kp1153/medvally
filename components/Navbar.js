"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState("en");
  const [widgetReady, setWidgetReady] = useState(false);

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

      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-white border-b shadow-sm">
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
        </div>
      </div>
    </>
  );
}
