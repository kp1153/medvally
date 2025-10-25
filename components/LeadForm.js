"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Thank you! Our medical expert will contact you shortly.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="lead-form" className="bg-teal-50 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border-t-4 border-amber-900">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Get Free Treatment Plan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />
          <input
            type="tel"
            required
            placeholder="WhatsApp Number"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />
          <textarea
            rows="3"
            placeholder="Your Medical Requirement"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}