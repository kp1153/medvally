"use client";

export default function Specialities() {
  return (
    <section id="treatments" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Medical Specialities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg border-l-4 border-indigo-600 bg-indigo-50">
            <h3 className="text-xl font-bold mb-2">Cardiology</h3>
            <p className="text-gray-700 text-sm">
              Heart surgery, angioplasty, bypass & valve replacement.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg border-l-4 border-teal-500 bg-teal-50">
            <h3 className="text-xl font-bold mb-2">Orthopedics</h3>
            <p className="text-gray-700 text-sm">
              Knee & hip replacement, spine surgery.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg border-l-4 border-indigo-600 bg-indigo-50">
            <h3 className="text-xl font-bold mb-2">Oncology</h3>
            <p className="text-gray-700 text-sm">
              Chemotherapy, radiation & robotic cancer care.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg border-l-4 border-teal-500 bg-teal-50">
            <h3 className="text-xl font-bold mb-2">Neurology</h3>
            <p className="text-gray-700 text-sm">
              Brain & spine surgeries, stroke management.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg border-l-4 border-indigo-600 bg-indigo-50">
            <h3 className="text-xl font-bold mb-2">Urology</h3>
            <p className="text-gray-700 text-sm">
              Kidney transplant, prostate & bladder treatments.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg border-l-4 border-teal-500 bg-teal-50">
            <h3 className="text-xl font-bold mb-2">Cosmetic Surgery</h3>
            <p className="text-gray-700 text-sm">
              Hair transplant, rhinoplasty & body contouring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
