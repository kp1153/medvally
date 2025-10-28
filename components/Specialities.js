"use client";

import {
  Heart,
  Bone,
  Activity,
  Brain,
  Pill,
  Scissors,
  Apple,
  Droplet,
  HeartPulse,
  Wind,
  Baby,
  Sparkles,
} from "lucide-react";

const specialities = [
  {
    icon: Heart,
    title: "Cardiology",
    desc: "Heart surgery, angioplasty, bypass & valve replacement",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    desc: "Knee & hip replacement, spine surgery",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Activity,
    title: "Oncology",
    desc: "Chemotherapy, radiation & robotic cancer care",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Neurology",
    desc: "Brain & spine surgeries, stroke management",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Droplet,
    title: "Urology",
    desc: "Kidney transplant, prostate & bladder treatments",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Scissors,
    title: "Cosmetic Surgery",
    desc: "Hair transplant, rhinoplasty & body contouring",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Apple,
    title: "Gastroenterology",
    desc: "Liver transplant, endoscopy, digestive disorders",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Pill,
    title: "Nephrology",
    desc: "Kidney disease, dialysis, renal care",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: HeartPulse,
    title: "Psychiatry",
    desc: "Mental health, depression, anxiety treatment",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Wind,
    title: "Pulmonology",
    desc: "Lung disease, asthma, respiratory care",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Baby,
    title: "Gynecology",
    desc: "IVF, infertility, women's health care",
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    desc: "Skin treatments, laser therapy, acne care",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function Specialities() {
  return (
    <section
      id="treatments"
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              World-Class Healthcare
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 mb-6">
            Medical Treatments We Facilitate
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            As a leading medical tourism company, we specialize in connecting
            international patients with world-class treatment options across
            India. From initial consultation to post-treatment follow-up, we
            guide you through every step of your healing journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialities.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${spec.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-600 transition-all duration-300">
                  {spec.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {spec.desc}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#cost"
            className="inline-block bg-gradient-to-r from-indigo-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Free Cost Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
