'use client';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Medvalley is a trusted medical tourism company in India helping patients from the Middle East, Africa,
          and CIS countries receive world-class treatment at affordable costs. From treatment planning to visa support,
          accommodation, airport pickup and post-treatment follow-up — we take care of everything.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-indigo-600 text-center">
            <h3 className="text-2xl font-bold text-gray-800">5000+</h3>
            <p className="text-sm text-gray-600">Happy Patients</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-teal-500 text-center">
            <h3 className="text-2xl font-bold text-gray-800">50+ Hospitals</h3>
            <p className="text-sm text-gray-600">Top Indian Hospitals</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-indigo-600 text-center">
            <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
            <p className="text-sm text-gray-600">Patient Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
