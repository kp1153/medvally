import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Logo Section */}
      <div className="flex justify-center items-center py-5 bg-[#003366]">
        <img
          src="/logo.jpg"
          alt="MedValley - Healing Starts Here"
          className="h-20"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-center gap-8 px-4 py-4 bg-gray-50 border-b-2 border-gray-300">
        <Link
          href="/"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          About Us
        </Link>
        <Link
          href="/services"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Services
        </Link>
        <Link
          href="/hospitals"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Hospitals & Doctors
        </Link>
        <Link
          href="/resources"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Patient Resources
        </Link>
        <Link
          href="/contact"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="text-[#003366] font-medium hover:text-blue-600"
        >
          Blog / News
        </Link>
      </nav>
    </>
  );
}
