"use client";

export default function LeadForm() {
  return (
    <section id="lead-form" className="bg-gray-100 py-10 px-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Get Free Treatment Plan
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 border rounded-lg focus:outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone / WhatsApp Number"
            className="w-full p-3 border rounded-lg focus:outline-none"
            required
          />
          <select
            className="w-full p-3 border rounded-lg focus:outline-none"
            required
          >
            <option value="">Select Treatment</option>
            <option>Heart Surgery</option>
            <option>Knee Replacement</option>
            <option>Cancer Treatment</option>
            <option>Spine Surgery</option>
            <option>Kidney Transplant</option>
          </select>
          <textarea
            placeholder="Message (optional)"
            className="w-full p-3 border rounded-lg focus:outline-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
