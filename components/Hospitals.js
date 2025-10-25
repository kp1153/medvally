'use client';

export default function Hospitals() {
  return (
    <section id="hospitals" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Top Hospitals in India
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hospital1.jpg" alt="Hospital 1" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold">Apollo Hospitals</h3>
              <p className="text-gray-600 text-sm mt-2">
                Best for heart, cancer, orthopedics & organ transplant.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hospital2.jpg" alt="Hospital 2" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold">Fortis Healthcare</h3>
              <p className="text-gray-600 text-sm mt-2">
                Trusted by international patients for advanced treatments.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/hospital3.jpg" alt="Hospital 3" className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold">Max Super Specialty</h3>
              <p className="text-gray-600 text-sm mt-2">
                Leading hospital with world-class medical facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
