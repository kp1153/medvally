'use client';

export default function Navbar() {
  return (
    <>
      {/* Branding Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-white border-b shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-lg transform-gpu" aria-hidden>
            <img src="/logo.jpg" alt="Medvalley logo" className="w-12 h-12 object-cover rounded-md" />
          </div>
          <div>
            <h1 className="text-indigo-700 text-2xl font-extrabold tracking-tight">Medvalley</h1>
            <p className="text-teal-600 text-sm font-medium">International Healthcare, Indian Hospitality</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">EN</button>
          <button className="px-4 py-1 border border-gray-200 rounded text-sm font-medium hover:bg-gray-50">AR</button>

          <a
            href="https://wa.me/919523534038"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 px-4 py-4 bg-white border-b">
        <a href="#home" className="text-teal-600 hover:underline font-semibold">Home</a>
        <a href="#treatments" className="text-indigo-600 hover:underline font-semibold">Treatments</a>
        <a href="#hospitals" className="text-teal-600 hover:underline font-semibold">Hospitals</a>
        <a href="#doctors" className="text-indigo-600 hover:underline font-semibold">Doctors</a>
        <a href="#cost" className="text-teal-600 hover:underline font-semibold">Cost Estimate</a>
        <a href="#patient-stories" className="text-indigo-600 hover:underline font-semibold">Patient Stories</a>
        <a href="#about" className="text-teal-600 hover:underline font-semibold">About Us</a>
        <a href="#contact" className="text-indigo-600 hover:underline font-semibold">Contact</a>
      </nav>
    </>
  );
}
