'use client';

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="bg-cover bg-center py-28 px-6 relative"
      style={{ backgroundImage: "url('/hospital-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto text-center p-8 rounded-xl">
        <div className="bg-white bg-opacity-95 backdrop-blur-md p-8 rounded-xl shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4">
            World-Class Medical Treatment in India
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Trusted hospitals, leading specialists and end-to-end support for international patients.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#lead-form"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Get Free Treatment Plan
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
