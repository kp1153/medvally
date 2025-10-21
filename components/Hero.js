"use client";
import { useState } from "react";
import {
  ArrowRight,
  Users,
  Building2,
  Globe,
  MessageSquare,
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    treatment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "dabd493e-5e77-46fc-9f7f-dd97214d28d4",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          treatment: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Medical Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/95 via-[#003366]/85 to-[#003366]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              World-Class Healthcare in India
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              Your Trusted Partner for Medical Tourism
            </p>
            <p className="text-lg mb-10 text-gray-300">
              Connecting international patients with India's finest hospitals
              and specialists since 2016
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
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

          {/* Right Column - Inquiry Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-[#003366] mb-2">
              Get Free Consultation
            </h2>
            <p className="text-gray-600 mb-6">
              Fill the form and our team will contact you within 24 hours
            </p>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Message sent successfully! We'll contact you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ✗ Failed to send. Please try again or contact via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                >
                  <option value="">Select your country</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Treatment Interested In *
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                >
                  <option value="">Select treatment</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Oncology">Oncology (Cancer)</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Fertility">Fertility & IVF</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Dental">Dental Care</option>
                  <option value="Cosmetic">Cosmetic Surgery</option>
                  <option value="Transplant">Organ Transplant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Brief Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Tell us about your medical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003366] text-white py-4 rounded-lg font-semibold hover:bg-[#0066CC] transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                <ArrowRight size={20} />
              </button>
            </form>

            <a
              href="https://wa.me/919523534038?text=Hello%20MedValley,%20I%20need%20medical%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-[#25D366] text-white py-4 rounded-lg font-semibold hover:bg-[#1ea952] transition flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
