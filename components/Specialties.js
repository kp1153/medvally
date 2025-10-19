import {
  Heart,
  Activity,
  Bone,
  Sparkles,
  Baby,
  Brain,
  Smile,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

export default function Specialties() {
  const specialties = [
    {
      icon: Heart,
      name: "Cardiology",
      color: "bg-red-500",
    },
    {
      icon: Activity,
      name: "Oncology",
      color: "bg-purple-500",
    },
    {
      icon: Bone,
      name: "Orthopedics",
      color: "bg-blue-500",
    },
    {
      icon: Sparkles,
      name: "Cosmetic Surgery",
      color: "bg-pink-500",
    },
    {
      icon: Baby,
      name: "Fertility & IVF",
      color: "bg-green-500",
    },
    {
      icon: Brain,
      name: "Neurology",
      color: "bg-indigo-500",
    },
    {
      icon: Smile,
      name: "Dental Care",
      color: "bg-cyan-500",
    },
    {
      icon: HeartPulse,
      name: "Transplants",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Treatment Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class medical treatments across 50+ specialties
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <Link
                key={index}
                href="/services"
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-[#003366]"
              >
                <div
                  className={`${specialty.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#003366] mb-2">
                  {specialty.name}
                </h3>
                <p className="text-sm text-[#0066CC] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
