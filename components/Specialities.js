"use client";

export default function Specialities() {
  return (
    <section id="specialities" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Medical Specialities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-red-500">
            <h3 className="text-xl font-bold mb-2">Cardiology</h3>
            <p className="text-gray-600 text-sm">
              Heart surgery, angioplasty, bypass & valve replacement.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-2">Orthopedics</h3>
            <p className="text-gray-600 text-sm">
              Knee replacement, hip replacement, spine surgery.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-2">Cancer (Oncology)</h3>
            <p className="text-gray-600 text-sm">
              Chemotherapy, radiation, robotic cancer treatment.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-yellow-500">
            <h3 className="text-xl font-bold mb-2">Neurology</h3>
            <p className="text-gray-600 text-sm">
              Brain tumor surgery, stroke & epilepsy treatment.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-purple-500">
            <h3 className="text-xl font-bold mb-2">Urology</h3>
            <p className="text-gray-600 text-sm">
              Kidney transplant, prostate & bladder treatment.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border-t-4 border-teal-500">
            <h3 className="text-xl font-bold mb-2">Cosmetic Surgery</h3>
            <p className="text-gray-600 text-sm">
              Hair transplant, liposuction, rhinoplasty & more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
