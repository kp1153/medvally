import { Target, Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            About MedValley
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your global gateway to exceptional healthcare since 2016
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/about-img.jpg"
              alt="MedValley Healthcare"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MedValley Pvt. Ltd stands as a global gateway to exceptional
              healthcare, born from the vision of making medical journeys
              smooth, transparent, and successful for patients worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Headquartered in India, MedValley has rapidly emerged as a leader
              in medical tourism, enabling patients to access cutting-edge
              treatments at India's world-class hospitals and with globally
              renowned specialists.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Having served patients from over 20 countries, MedValley's
              commitment to quality, compassion, and convenience sets a
              benchmark in the international healthcare landscape.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#003366] to-[#0066CC] text-white p-8 rounded-2xl shadow-lg">
            <Target size={48} className="mb-4 text-[#FFD700]" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To ensure healthcare is accessible and affordable regardless of
              geography.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0066CC] to-[#003366] text-white p-8 rounded-2xl shadow-lg">
            <Heart size={48} className="mb-4 text-[#FFD700]" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To bridge the gap between global patients and outstanding medical
              solutions in India and beyond through comprehensive support and
              personalized attention.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-[#FFD700]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={40} className="text-[#003366]" />
            </div>
            <h4 className="text-xl font-bold text-[#003366] mb-2">
              2000+ Specialists
            </h4>
            <p className="text-gray-600">Across India and international hubs</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#FFD700]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={40} className="text-[#003366]" />
            </div>
            <h4 className="text-xl font-bold text-[#003366] mb-2">
              JCI & NABH Accredited
            </h4>
            <p className="text-gray-600">Top-rated hospital network</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-[#FFD700]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={40} className="text-[#003366]" />
            </div>
            <h4 className="text-xl font-bold text-[#003366] mb-2">
              24/7 Support
            </h4>
            <p className="text-gray-600">
              Multilingual assistance always available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
