"use client";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: "url('/hospital-bg.jpg')" }}
    >
      <div className="max-w-3xl mx-auto text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Top Medical Treatment in India for International Patients
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          World-class hospitals, trusted doctors, affordable treatment – with
          complete care and support.
        </p>
        <a
          href="#lead-form"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          Get Free Quote
        </a>
      </div>
    </section>
  );
}
