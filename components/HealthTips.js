"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/client";
import { Lightbulb, Sparkles } from "lucide-react";

export default function HealthTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      const query = `*[_type == "healthTip" && isActive == true] | order(order asc) [0...6]`;
      const data = await client.fetch(query);
      setTips(data);
    };
    fetchTips();
  }, []);

  const gradients = [
    "from-teal-500 to-cyan-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
    "from-orange-500 to-amber-500",
    "from-blue-500 to-indigo-500",
    "from-purple-500 to-pink-500",
  ];

  if (tips.length === 0) {
    return (
      <section
        id="health-tips"
        className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              💡 Health Tips
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-6">
            Health Tips
          </h2>
          <p className="text-gray-500">
            No tips available yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="health-tips"
      className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              💡 Expert Advice
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-6">
            Health Tips for You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert health advice and tips to help you maintain a healthy
            lifestyle
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={tip._id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Accent on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[idx % gradients.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Top Accent Bar */}
              <div
                className={`h-1 bg-gradient-to-r ${gradients[idx % gradients.length]}`}
              ></div>

              <div className="p-6 relative z-10">
                {/* Icon */}
                {tip.icon ? (
                  <div className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={urlFor(tip.icon).width(80).height(80).url()}
                      alt={tip.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-md`}
                  >
                    <Lightbulb
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {tip.description}
                </p>

                {/* Bottom Sparkle Icon */}
                <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles
                    className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${gradients[idx % gradients.length]}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Need Medical Advice?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our medical experts are available 24/7 to answer your health
              questions
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
