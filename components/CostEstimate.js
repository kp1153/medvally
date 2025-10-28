"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Globe,
  Stethoscope,
  MessageSquare,
} from "lucide-react";

const ADMIN_WA = "+919523534038";

export default function CostEstimate() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const country = form.country ? form.country.value.trim() : "";
    const treatment = form.treatment.value;
    const message = form.message.value.trim();

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          treatment,
          message,
          source: "Website CostEstimate",
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      const waText = encodeURIComponent(
        `New Cost Estimate Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nTreatment: ${treatment}\n\nMessage: ${message}`
      );
      const waUrl = `https://wa.me/${ADMIN_WA.replace(/^\+/, "")}?text=${waText}`;

      setSuccess(
        "✓ Request sent successfully! Our team will contact you shortly."
      );
      setLoading(false);

      window.open(waUrl, "_blank");
      form.reset();
    } catch (err) {
      console.error("Save error", err);
      setSuccess(
        "✗ Could not send request. Please email medvalleypvtltd@gmail.com directly."
      );
      setLoading(false);
    }
  };

  return (
    <section
      id="cost"
      className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-teal-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              💰 Free Cost Estimate
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 mb-4">
            Get Your Treatment Cost
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill in your details and our medical experts will provide you with
            an accurate cost estimate within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  name="country"
                  type="text"
                  placeholder="Your country"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Treatment */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Treatment Required *
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="treatment"
                  required
                  defaultValue=""
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 appearance-none cursor-pointer bg-white"
                >
                  <option value="" disabled>
                    Select treatment type
                  </option>
                  <option>Heart Surgery</option>
                  <option>Kidney Transplant</option>
                  <option>Liver Transplant</option>
                  <option>Cancer Treatment</option>
                  <option>Brain & Spine Surgery</option>
                  <option>Knee Replacement</option>
                  <option>IVF Treatment</option>
                  <option>Orthopedic Surgery</option>
                  <option>Cosmetic Surgery</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Medical Details
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Please describe your medical condition and any specific requirements..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-400 h-36 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 disabled:from-gray-300 disabled:to-gray-400 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Get Free Estimate
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Success/Error Message */}
          {success && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-start gap-3 ${
                success.startsWith("✓")
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              {success.startsWith("✓") ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <p
                className={`text-sm font-medium ${
                  success.startsWith("✓") ? "text-green-800" : "text-red-800"
                }`}
              >
                {success}
              </p>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-center">
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">100% Confidential</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">Quick Response</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">No Hidden Charges</span>
          </div>
        </div>
      </div>
    </section>
  );
}
