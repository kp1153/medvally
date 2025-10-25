"use client";
import { useState, useEffect } from "react";

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

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="home" className="relative w-full h-[400px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
      >
        ❯
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
