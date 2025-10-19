import {
  ClipboardCheck,
  Plane,
  FileText,
  Heart,
  Stethoscope,
  Video,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Pre-Treatment Assistance",
      description:
        "Free expert consultations, medical report assessment, and matching with best hospitals and specialists.",
    },
    {
      icon: Plane,
      title: "Medical Travel Facilitation",
      description:
        "Flight bookings, airport pickups, hotel arrangements, and currency exchange support.",
    },
    {
      icon: FileText,
      title: "Visa & Documentation",
      description:
        "Visa assistance, invitation letters, and expedited visa processing services.",
    },
    {
      icon: Heart,
      title: "In-Treatment Coordination",
      description:
        "Dedicated case managers, interpreter services, and regular progress updates for families.",
    },
    {
      icon: Stethoscope,
      title: "Post-Treatment Care",
      description:
        "Discharge assistance, medicines, rehabilitation support, and follow-up care coordination.",
    },
    {
      icon: Video,
      title: "Teleconsultations",
      description:
        "Virtual consultations with treating doctors after returning home for continued care.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive end-to-end support for your complete medical journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-[#003366] transition-all hover:shadow-xl"
              >
                <div className="bg-[#FFD700]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003366] transition-colors">
                  <Icon
                    size={32}
                    className="text-[#003366] group-hover:text-[#FFD700] transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
