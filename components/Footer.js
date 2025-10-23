import Link from "next/link";
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mb-6">
          <h3 className="text-xl font-bold mb-4 text-[#FFD700] text-center">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone size={20} className="text-[#FFD700] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">+91-9523534038</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={20} className="text-[#FFD700] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">medvalleypvtltd@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#FFD700] mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-300">
                  8A/5A, 2nd Floor, Gandhi Park Lane, Hauz Rani, Malviya Nagar,
                  110017
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="max-w-2xl mx-auto mb-6">
          <h3 className="text-xl font-bold mb-4 text-[#FFD700] text-center">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.youtube.com/@medvalleypvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-[#FFD700]"
            >
              <Youtube size={32} />
            </a>
            <a
              href="https://facebook.com/medvalleypvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FFD700]"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://instagram.com/medvalleypvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FFD700]"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://t.me/medvalleypvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FFD700]"
            >
              <Send size={32} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 text-center space-y-1">
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
              Kamta Prasad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
