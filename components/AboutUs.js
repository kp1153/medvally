"use client";

import {
  Users,
  Building2,
  HeadphonesIcon,
  Award,
  Shield,
  Globe,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Patients",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      number: "50+",
      label: "Top Indian Hospitals",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HeadphonesIcon,
      number: "24/7",
      label: "Patient Support",
      color: "from-teal-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted Partner",
      description:
        "Verified network of top-tier hospitals and experienced doctors",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving patients from Middle East, Africa, and CIS countries",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Complete Care",
      description: "End-to-end support from visa to post-treatment follow-up",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              🏥 About Medvalley
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 mb-6">
            Your Trusted Medical Tourism Partner
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Medvalley is a trusted medical tourism company in India helping
            patients from the Middle East, Africa, and CIS countries receive
            world-class treatment at affordable costs. From treatment planning
            to visa support, accommodation, airport pickup and post-treatment
            follow-up — we take care of everything.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-md mx-auto`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md mx-auto`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Medical Journey?
          </h3>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is available 24/7 to answer your questions and guide
            you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#cost"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Free Estimate
            </a>
            <a
              href="https://wa.me/919523534038"
              target="_blank"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
