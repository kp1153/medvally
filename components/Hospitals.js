import { MapPin, Award, Users } from "lucide-react";

export default function Hospitals() {
  const stats = [
    { number: "100+", label: "Partner Hospitals" },
    { number: "12", label: "Cities in India" },
    { number: "8000+", label: "Specialist Doctors" },
  ];

  const hospitals = [
    {
      name: "Apollo Hospitals",
      location: "New Delhi, Mumbai, Chennai",
      specialties: "Cardiology, Oncology, Transplants",
    },
    {
      name: "Fortis Healthcare",
      location: "New Delhi, Bangalore, Mumbai",
      specialties: "Cardiac Surgery, Neurology, Orthopedics",
    },
    {
      name: "Max Healthcare",
      location: "New Delhi, Gurugram",
      specialties: "Oncology, Robotic Surgery, IVF",
    },
    {
      name: "BLK Super Specialty",
      location: "New Delhi",
      specialties: "Bone Marrow Transplant, Neurosurgery",
    },
    {
      name: "Artemis Hospital",
      location: "Gurugram",
      specialties: "Cancer Care, Joint Replacement",
    },
    {
      name: "Kokilaben Dhirubhai Ambani",
      location: "Mumbai",
      specialties: "Multi-Organ Transplant, Cardiology",
    },
  ];

  return (
    <section className="py-20 bg-white" id="hospitals">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Our Partner Hospitals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most respected healthcare institutions at your service
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#003366] to-[#0066CC] rounded-2xl text-white"
            >
              <div className="text-5xl font-bold text-[#FFD700] mb-2">
                {stat.number}
              </div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hospital Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-[#003366] hover:shadow-xl transition-all"
            >
              <div className="bg-[#003366] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-[#FFD700]" />
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">
                {hospital.name}
              </h3>
              <div className="flex items-start gap-2 mb-4 text-gray-600">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>{hospital.location}</p>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <Users size={20} className="mt-1 flex-shrink-0" />
                <p className="text-sm">{hospital.specialties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
