import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & About */}
          <div>
            <img src="/logo.jpg" alt="MedValley" className="h-16 mb-4" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for world-class medical tourism since 2016.
              Connecting patients globally with India's finest healthcare.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FFD700] transition"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitals"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Hospitals & Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Blog / News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Specialties */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700]">
              Specialties
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Oncology
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Fertility & IVF
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Neurology
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#FFD700] transition"
                >
                  Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-[#FFD700] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">+91-XXXXXXXXXX</p>
                  <p className="text-sm text-gray-400">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#FFD700] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">medvalleypvtltd@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#FFD700] mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-gray-300">New Delhi, India</p>
                  <p className="text-sm text-gray-400">Headquarters</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center space-y-2">
          <p className="text-gray-300">
            © 2025 MedValley Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://www.web-developer-kp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline"
            >
              KP Web Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
