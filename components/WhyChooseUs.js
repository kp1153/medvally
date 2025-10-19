import { Shield, HeadphonesIcon, UserCheck, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "JCI/NABH Hospitals & 2000+ Specialists",
      description:
        "Access to India's finest accredited hospitals and globally renowned medical experts across all specialties.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Multilingual Support",
      description:
        "Round-the-clock assistance in Arabic, French, Russian, Swahili, and more for seamless communication.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Case Managers",
      description:
        "Personal assistance with cultural sensitivity and meticulous attention to every detail of your journey.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description:
        "Clear cost estimates, treatment plan comparisons, and no hidden charges for complete peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Why Choose MedValley?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choosing MedValley means choosing assurance, expertise, and a caring
            partner for your medical journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="bg-[#003366] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
