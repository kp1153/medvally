import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

        {/* Empty testimonials - to be added later */}
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Testimonials will be added soon
          </p>
        </div>
      </div>
    </section>
  );
}
