"use client";

import {
  Youtube,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@medvalleypvtltd",
      color: "hover:text-red-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/medvalleypvtltd",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/medvalleypvtltd",
      color: "hover:text-pink-500",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/medvalleypvtltd",
      color: "hover:text-sky-500",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Treatments", href: "#treatments" },
    { name: "Hospitals", href: "#hospitals" },
    { name: "Success Stories", href: "#patient-stories" },
    { name: "Health Tips", href: "#health-tips" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
                alt="Medvalley"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  Medvalley
                </h3>
                <p className="text-xs text-indigo-200">Medical Tourism</p>
              </div>
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed mb-4">
              Trusted medical tourism company connecting international patients
              with India's best hospitals.
            </p>
            <div className="flex items-center gap-2 text-indigo-200 text-sm">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Serving 5000+ Happy Patients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  
                    href={link.href}
                    className="text-indigo-200 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-teal-400 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-indigo-200">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
                
                  href="https://wa.me/919523534038"
                  className="hover:text-white transition-colors"
                >
                  +91-9523534038
                </a>
              </li>
              <li className="flex items-start gap-3 text-indigo-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
                
                  href="mailto:medvalleypvtltd@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  medvalleypvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-indigo-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400" />
                <div className="leading-relaxed">
                  <p className="font-semibold text-white mb-1">India Office:</p>
                  <p className="mb-3">
                    8A/5A, 2nd Floor, Gandhi Park Lane, Hauz Rani, Malviya Nagar,
                    Delhi 110017
                  </p>
                  <p className="font-semibold text-white mb-1">Uzbekistan Office:</p>
                  <p>
                    Toshkent Shahar, Yashnobod Tumani, Magtymguly Kuchasi, 93/3Y, Uzbekistan
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${social.color} group`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            
              href="https://wa.me/919523534038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-indigo-200 text-center md:text-left">
              <p className="mb-1">
                © {new Date().getFullYear()} Medvalley. All Rights Reserved.
              </p>
              <p className="text-xs">
                Trusted Medical Tourism Company in India
              </p>
            </div>

            
              <a href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group"
            >
              <span className="text-xs text-indigo-200 group-hover:text-white">
                Designed by
              </span>
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 group-hover:from-pink-200 group-hover:to-purple-200">
                Kamta Prasad
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}