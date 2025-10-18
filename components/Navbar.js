// components/Navbar.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Medvally Navbar
 * - Responsive (desktop dropdowns + mobile slide-down)
 * - Accessible: keyboard support (Escape to close), ARIA attributes
 * - Pure Tailwind CSS (no external libs)
 *
 * Usage: <Navbar />
 */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "treatments" | "hospitals" | "doctors" | null
  const rootRef = useRef();

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    function onEscape(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  // small helper to toggle dropdown (closes if same)
  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  // Menu data (easy to extend)
  const menus = {
    treatments: [
      { title: "Cardiology", href: "/treatments/cardiology" },
      { title: "Orthopedics", href: "/treatments/orthopedics" },
      { title: "Oncology", href: "/treatments/oncology" },
      { title: "Bariatric Surgery", href: "/treatments/bariatric" },
    ],
    hospitals: [
      { title: "Mumbai", href: "/hospitals/mumbai" },
      { title: "Delhi", href: "/hospitals/delhi" },
      { title: "Bengaluru", href: "/hospitals/bengaluru" },
      { title: "All Hospitals", href: "/hospitals" },
    ],
    doctors: [
      { title: "By Speciality", href: "/doctors/speciality" },
      { title: "Top Surgeons", href: "/doctors/top" },
      { title: "Teleconsultation", href: "/doctors/tele" },
    ],
  };

  return (
    <header ref={rootRef} className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              {/* replace with <Image ... /> if you have a logo file */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center shadow-md">
                <span className="text-white font-semibold">M</span>
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900">
                Medvally
              </span>
            </Link>
          </div>

          {/* Desktop menus */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Treatments dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === "treatments"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("treatments")}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Treatments
                <svg
                  className={`w-4 h-4 transform transition-transform duration-150 ${
                    openDropdown === "treatments" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* dropdown panel */}
              {openDropdown === "treatments" && (
                <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-3">
                  <div className="grid grid-cols-1 gap-1 px-3">
                    {menus.treatments.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {m.title}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-2 px-3">
                    <Link
                      href="/treatments"
                      className="text-xs text-blue-600 hover:underline font-medium"
                      onClick={() => setOpenDropdown(null)}
                    >
                      View all treatments →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Hospitals dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === "hospitals"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("hospitals")}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Hospitals
                <svg
                  className={`w-4 h-4 transform transition-transform duration-150 ${
                    openDropdown === "hospitals" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {openDropdown === "hospitals" && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-3">
                  <div className="px-3">
                    {menus.hospitals.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {m.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Doctors dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === "doctors"}
                aria-haspopup="true"
                onClick={() => toggleDropdown("doctors")}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Doctors
                <svg
                  className={`w-4 h-4 transform transition-transform duration-150 ${
                    openDropdown === "doctors" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {openDropdown === "doctors" && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-3">
                  <div className="px-3">
                    {menus.doctors.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {m.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Actions + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => {
                setMobileOpen((v) => !v);
                setOpenDropdown(null);
              }}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden transition-max-h duration-300 ease-in-out overflow-hidden bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          <Link href="/" className="block text-gray-800 font-medium px-2 py-2 rounded hover:bg-gray-50">
            Home
          </Link>

          {/* Mobile: accordion style */}
          <MobileAccordion
            title="Treatments"
            items={menus.treatments}
          />

          <MobileAccordion title="Hospitals" items={menus.hospitals} />
          <MobileAccordion title="Doctors" items={menus.doctors} />

          <Link href="/about" className="block text-gray-800 font-medium px-2 py-2 rounded hover:bg-gray-50">
            About
          </Link>
          <Link href="/contact" className="block text-gray-800 font-medium px-2 py-2 rounded hover:bg-gray-50">
            Contact
          </Link>

          <Link href="/book" className="block mt-2 px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-semibold">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

/* -----------------------------
   MobileAccordion helper component
   ----------------------------- */
function MobileAccordion({ title, items = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-800 hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-medium">{title}</span>
        <svg className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={`transition-max-h duration-250 ease-in-out overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"}`}>
        <div className="px-3 py-2 space-y-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block text-gray-700 text-sm px-2 py-2 rounded hover:bg-gray-50"
            >
              {it.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
