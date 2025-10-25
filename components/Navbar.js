"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Top Branding Bar */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-white border-b">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Medvalley - Healing Starts Here"
            className="h-16 w-auto drop-shadow-lg"
          />
          <div>
            <h1 className="text-blue-600 text-2xl font-extrabold tracking-wide">
              Medvalley
            </h1>
            <p className="text-green-600 text-sm font-bold">
              International Healthcare, Indian Hospitality
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="px-4 py-1 border border-gray-400 rounded text-sm font-medium hover:bg-gray-100">
            EN
          </button>
          <button className="px-4 py-1 border border-gray-400 rounded text-sm font-medium hover:bg-gray-100">
            AR
          </button>
          <a
            href="https://wa.me/0000000000"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex flex-wrap justify-center gap-6 px-4 py-4 bg-gray-50 border-b-2 border-gray-300 text-sm font-semibold">
        <a href="#home" className="text-red-600 hover:underline">
          Home
        </a>
        <a href="#treatments" className="text-blue-600 hover:underline">
          Treatments
        </a>
        <a href="#hospitals" className="text-green-600 hover:underline">
          Hospitals
        </a>
        <a href="#doctors" className="text-purple-600 hover:underline">
          Doctors
        </a>
        <a href="#cost" className="text-yellow-600 hover:underline">
          Cost Estimate
        </a>
        <a href="#patient-stories" className="text-pink-600 hover:underline">
          Patient Stories
        </a>
        <a href="#about" className="text-indigo-600 hover:underline">
          About Us
        </a>
        <a href="#contact" className="text-orange-600 hover:underline">
          Contact
        </a>
      </nav>

      {/* Smooth Scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
