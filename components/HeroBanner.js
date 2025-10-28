"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Shield, Award } from "lucide-react";

export default function HeroBanner() {
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[600px] overflow-hidden bg-gray-900"
    >
      {/* Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                🌍 Trusted Medical Tourism Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-up">
              World-Class Healthcare,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Indian Hospitality
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up-delay">
              Connect with India's top hospitals and specialist doctors. From
              treatment planning to recovery, we're with you every step of the
              way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up-delay-2">
              <a
                href="#cost"
                className="group bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Free Estimate
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <a
                href="https://wa.me/919523534038"
                target="_blank"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Talk to Expert
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-delay">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-full mb-2 mx-auto backdrop-blur-sm">
                  <Heart className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-sm text-gray-300">Happy Patients</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-2 mx-auto backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Top Hospitals</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-full mb-2 mx-auto backdrop-blur-sm">
                  <Award className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group border border-white/20"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-8 h-2 bg-gradient-to-r from-teal-400 to-cyan-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}
