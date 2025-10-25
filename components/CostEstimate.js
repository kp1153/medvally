'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_fefinkv';
const TEMPLATE_ID = 'template_t2ry7vg';
const PUBLIC_KEY = 'yF3fvDRlO8cZIj5-V';
const ADMIN_WA = '+919523534038';

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
    const country = form.country ? form.country.value.trim() : '';
    const treatment = form.treatment.value;
    const message = form.message.value.trim();

    const templateParams = {
      name,
      phone,
      email,
      country,
      treatment,
      message,
      source: 'Website CostEstimate'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      const waText = encodeURIComponent(
        `New Cost Estimate Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nTreatment: ${treatment}\n\nMessage: ${message}`
      );
      const waUrl = `https://wa.me/${ADMIN_WA.replace(/^\+/, '')}?text=${waText}`;

      setSuccess('Estimate request sent. Our team will contact you shortly.');
      setLoading(false);

      window.open(waUrl, '_blank');
      form.reset();
    } catch (err) {
      console.error('EmailJS error', err);
      setSuccess('Could not send request. Please email medvalleypvtltd@gmail.com directly.');
      setLoading(false);
    }
  };

  return (
    <section id="cost" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Get a Free Cost Estimate</h2>
        <p className="text-gray-700 mb-10">
          Fill in your details below and our team will get back with an accurate medical treatment estimate in India.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto text-left">
          <input name="name" type="text" placeholder="Full Name" required className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500" />

          <input name="email" type="email" placeholder="Email Address" required className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500" />

          <input name="phone" type="tel" placeholder="Phone / WhatsApp Number" required className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500" />

          <input name="country" type="text" placeholder="Country" className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500" />

          <select name="treatment" required className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500" defaultValue="">
            <option value="" disabled>Select Treatment</option>
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

          <textarea name="message" placeholder="Describe Your Medical Need" className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-pink-500 h-32"></textarea>

          <button type="submit" disabled={loading} className="mt-3 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
            {loading ? 'Sending...' : 'Get Estimate'}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-sm text-center text-gray-700">{success}</p>
        )}
      </div>
    </section>
  );
}
