'use client';

export default function Navbar() {
  return (
    <>
      {/* Branding Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-5 bg-white border-b shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-lg">
            <img src="/logo.jpg" alt="Medvalley logo" className="w-12 h-12 object-cover rounded-md" />
          </div>
          <div>
            <h1 className="text-indigo-800 text-2xl font-extrabold tracking-tight">Medvalley</h1>
            <p className="text-teal-700 text-sm font-semibold">International Healthcare, Indian Hospitality</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="px-4 py-1 rounded text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow">
            EN
          </button>
          <button className="px-4 py-1 rounded text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow">
            AR
          </button>

          <a
            href="https://wa.me/919523534038"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 px-4 py-4 bg-white border-b">
        <a href="#home" className="text-teal-700 hover:underline font-semibold">Home</a>
        <a href="#treatments" className="text-indigo-700 hover:underline font-semibold">Treatments</a>
        <a href="#hospitals" className="text-teal-700 hover:underline font-semibold">Hospitals</a>
        <a href="#doctors" className="text-indigo-700 hover:underline font-semibold">Doctors</a>
        <a href="#cost" className="text-pink-700 hover:underline font-semibold">Cost Estimate</a>
        <a href="#patient-stories" className="text-indigo-700 hover:underline font-semibold">Patient Stories</a>
        <a href="#about" className="text-teal-700 hover:underline font-semibold">About Us</a>
        <a href="#contact" className="text-indigo-700 hover:underline font-semibold">Contact</a>
      </nav>
    </>
  );
}
