"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+91-9523534038",
      link: "https://wa.me/919523534038",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "medvalleypvtltd@gmail.com",
      link: "mailto:medvalleypvtltd@gmail.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: MapPin,
      title: "India Office",
      value:
        "8A/5A, 2nd Floor, Gandhi Park Lane, Hauz Rani, Malviya Nagar, Delhi 110017",
      link: null,
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: MapPin,
      title: "Uzbekistan Office",
      value:
        "Toshkent Shahar, Yashnobod Tumani, Magtymguly Kuchasi, 93/3Y, Uzbekistan",
      link: null,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              📞 Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are available 24/7 to assist international patients. Reach out to
            us anytime!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>

                {/* FIX 1: Added <a> tag start below */}
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-600 hover:text-indigo-600 transition-colors text-sm break-words leading-relaxed"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.value}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* 24/7 Support Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  24/7 Support Available
                </h3>
                <p className="text-indigo-100">
                  We're here to help you anytime, anywhere
                </p>
              </div>
            </div>

            {/* FIX 2: Added <a> tag start below */}
            <a
              href="https://wa.me/919523534038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Now
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100 overflow-hidden">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.836760075507!2d77.2167!3d28.5444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzM5LjgiTiA3N8KwMTMnMDAuMSJF!5e0!3m2!1sen!2sin!4v1632000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
