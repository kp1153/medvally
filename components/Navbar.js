'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,ru,fr,bn,fa',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  const changeLanguage = (lang) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-white border-b shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-lg transform-gpu" aria-hidden="true">
            <img src="/logo.jpg" alt="Medvalley logo" className="w-12 h-12 object-cover rounded-md" />
          </div>
          <div>
            <h1 className="text-indigo-700 text-2xl font-extrabold tracking-tight">Medvalley</h1>
            <p className="text-teal-600 text-sm font-medium">International Healthcare, Indian Hospitality</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button onClick={() => changeLanguage('en')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">EN</button>
          <button onClick={() => changeLanguage('ar')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">AR</button>
          <button onClick={() => changeLanguage('ru')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">RU</button>
          <button onClick={() => changeLanguage('fr')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">FR</button>
          <button onClick={() => changeLanguage('bn')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">BN</button>
          <button onClick={() => changeLanguage('fa')} className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">FA</button>

          <Link
            href="https://wa.me/919523534038"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-6 px-4 py-4 bg-white border-b">
        <Link href="#home" className="text-teal-600 hover:underline font-semibold">Home</Link>
        <Link href="#treatments" className="text-indigo-600 hover:underline font-semibold">Treatments</Link>
        <Link href="#hospitals" className="text-teal-600 hover:underline font-semibold">Hospitals</Link>
        <Link href="#cost" className="text-indigo-600 hover:underline font-semibold">Cost Estimate</Link>
        <Link href="#patient-stories" className="text-teal-600 hover:underline font-semibold">Patient Stories</Link>
        <Link href="#about" className="text-indigo-600 hover:underline font-semibold">About Us</Link>
        <Link href="#contact" className="text-teal-600 hover:underline font-semibold">Contact</Link>
      </nav>
    </>
  );
}