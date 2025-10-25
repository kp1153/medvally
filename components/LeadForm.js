'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // Basic behavior: open WhatsApp with prefilled message and also simulate form send.
    const form = e.target;
    const name = form.name.value.trim();
    const country = form.country.value.trim();
    const phone = form.phone.value.trim();
    const treatment = form.treatment.value;
    const message = form.message.value.trim();

    const text = `Name: ${name}%0ACountry: ${country}%0APhone: ${phone}%0ATreatment: ${treatment}%0AMessage: ${encodeURIComponent(message)}`;
    const wa = `https://wa.me/919523534038?text=${text}`;

    // open WhatsApp in new tab
    window.open(wa, '_blank');

    // reset & stop loading after small delay
    setTimeout(() => {
      setLoading(false);
      form.reset();
    }, 700);
  };

  return (
    <section id="lead-form" className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-teal-50 border rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-extrabold text-indigo-700 text-center mb-4">
          Get Free Treatment Plan
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Quick form — we will contact you within 24 hours. (Also opens WhatsApp for instant chat)
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 outline-none"
          />

          <input
            name="country"
            type="text"
            placeholder="Country"
            required
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 outline-none"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone / WhatsApp Number"
            required
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 outline-none"
          />

          <select
            name="treatment"
            required
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 outline-none"
          >
            <option value="">Select Treatment</option>
            <option>Heart Surgery</option>
            <option>Knee Replacement</option>
            <option>Cancer Treatment</option>
            <option>Spine Surgery</option>
            <option>Kidney Transplant</option>
          </select>

          <textarea
            name="message"
            placeholder="Message (optional)"
            rows={4}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-200 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold shadow"
          >
            {loading ? 'Opening WhatsApp...' : 'Submit & Chat on WhatsApp'}
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-3">
          By submitting you agree to our <span className="font-medium">privacy policy</span>.
        </p>
      </div>
    </section>
  );
}
