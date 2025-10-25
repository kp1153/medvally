'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_fefinkv';
const TEMPLATE_ID = 'template_t2ry7vg';
const PUBLIC_KEY = 'yF3fvDRlO8cZIj5-V';
const ADMIN_WA = '+919523534038'; // admin WhatsApp (used to open chat with prefilled text)

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const country = form.country.value.trim();
    const treatment = form.treatment.value;
    const message = form.message.value.trim();

    const templateParams = {
      name,
      phone,
      email,
      country,
      treatment,
      message,
      source: 'Website LeadForm'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // open WhatsApp web with prefilled admin message (will prompt user to send)
      const waText = encodeURIComponent(
        `New Lead from Website\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nTreatment: ${treatment}\n\nMessage: ${message}`
      );
      const waUrl = `https://wa.me/${ADMIN_WA.replace(/^\+/, '')}?text=${waText}`;

      setSuccess('Thank you — your request has been sent. We will contact you soon.');
      setLoading(false);

      // open WhatsApp in new tab so admin can be notified (user will need to send)
      window.open(waUrl, '_blank');

      form.reset();
    } catch (err) {
      console.error('EmailJS error', err);
      setSuccess('Something went wrong. Please try again or contact us at medvalleypvtltd@gmail.com');
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="bg-teal-50 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 border-t-4 border-amber-900">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Get Free Treatment Plan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />

          <input
            name="phone"
            type="tel"
            required
            placeholder="WhatsApp Number"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          />

          <input
            name="country"
            type="text"
            placeholder="Country"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <select
            name="treatment"
            required
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Treatment
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

          <textarea
            name="message"
            rows="3"
            placeholder="Your Medical Requirement"
            className="w-full border-2 border-amber-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-pink-600 placeholder:text-pink-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {success}
          </p>
        )}
      </div>
    </section>
  );
}
