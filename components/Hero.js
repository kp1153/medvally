import Link from "next/link";
import { ArrowRight, Users, Building2, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Medical Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            World-Class Healthcare in India
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Trusted Partner for Medical Tourism
          </p>
          <p className="text-lg mb-10 text-gray-300">
            Connecting international patients with India's finest hospitals and
            specialists since 2016
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-[#FFD700] text-[#003366] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition border border-white/30"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Globe className="text-[#FFD700]" size={32} />
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#FFD700]" size={32} />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Happy Patients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="text-[#FFD700]" size={32} />
              <div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-300">Partner Hospitals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
