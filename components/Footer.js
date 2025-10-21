import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-xl font-bold mb-6 text-[#FFD700] text-center">
            Contact Us
          </h3>
          <ul className="space-y-4">
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
              Kamta Prasad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
