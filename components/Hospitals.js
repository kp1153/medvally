"use client";

export default function Hospitals() {
  return (
    <section id="hospitals" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Top Hospitals in India
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/hospital1.jpg"
              alt="Apollo"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                Apollo Hospitals
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Best for cardiac, oncology & transplant procedures.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/hospital2.jpg"
              alt="Fortis"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                Fortis Healthcare
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Trusted by international patients for advanced care.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/hospital3.jpg"
              alt="Max"
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">
                Max Super Specialty
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                World-class facilities and experienced teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
