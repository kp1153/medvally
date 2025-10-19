import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      country: "🇦🇪 UAE",
      rating: 5,
      text: "MedValley made my cardiac surgery journey seamless. From visa to post-treatment care, everything was perfectly coordinated. The doctors were world-class and the support team was available 24/7.",
      treatment: "Cardiac Surgery",
    },
    {
      name: "Fatima Ibrahim",
      country: "🇳🇬 Nigeria",
      rating: 5,
      text: "I came to India for fertility treatment through MedValley. They handled everything - flights, hotel, hospital coordination. Today I'm a proud mother of twins. Forever grateful!",
      treatment: "IVF Treatment",
    },
    {
      name: "Mohammed Hassan",
      country: "🇮🇶 Iraq",
      rating: 5,
      text: "Excellent service! The case manager spoke Arabic and helped my family feel comfortable. The orthopedic surgery was successful and cost was very transparent. Highly recommend MedValley.",
      treatment: "Knee Replacement",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Patient Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our satisfied patients across the world
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow relative"
            >
              <Quote
                size={48}
                className="text-[#FFD700] opacity-20 absolute top-4 right-4"
              />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FFD700] text-[#FFD700]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Treatment */}
              <div className="mb-4">
                <span className="bg-[#003366] text-white text-sm px-3 py-1 rounded-full">
                  {testimonial.treatment}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#003366]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
