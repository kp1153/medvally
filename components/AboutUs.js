"use client";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          About Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Medvalley is a trusted medical tourism company in India helping
          patients from the Middle East, Africa, and CIS countries get the best
          medical treatment in India at affordable costs. We connect you with
          **NABH & JCI accredited hospitals** and **top specialist doctors**
          across India. From treatment planning to visa assistance, airport
          pickup, medical appointments and follow-up – we support you at every
          step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10">
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-gray-800">5000+</h3>
            <p className="text-sm text-gray-600">Happy Patients</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-green-600">
            <h3 className="text-xl font-bold text-gray-800">50+ Hospitals</h3>
            <p className="text-sm text-gray-600">Top Indian Hospitals</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-red-600">
            <h3 className="text-xl font-bold text-gray-800">24/7</h3>
            <p className="text-sm text-gray-600">Patient Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
