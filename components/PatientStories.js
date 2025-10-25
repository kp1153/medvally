"use client";

export default function PatientStories() {
  return (
    <section id="patient-stories" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Patient Success Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 italic mb-4">
              "I came from Kenya for heart surgery. Medvalley arranged
              everything – hospital, visa, hotel, translator. I’m healthy now!"
            </p>
            <h4 className="font-bold text-teal-600">— Ahmed, Kenya</h4>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 italic mb-4">
              "My mother had knee replacement in India. Best medical care and
              great support throughout."
            </p>
            <h4 className="font-bold text-teal-600">— Fatima, Oman</h4>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-700 italic mb-4">
              "I received cancer treatment at a top hospital in Delhi.
              Affordable and advanced technology."
            </p>
            <h4 className="font-bold text-teal-600">— Sergey, Kazakhstan</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
