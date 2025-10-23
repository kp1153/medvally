import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Logo and Company Name Section */}
      <div className="relative flex items-center px-6 py-5 bg-pink-100">
        <img
          src="/logo.jpg"
          alt="Medvalley - Healing Starts Here"
          className="h-16 w-auto"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-blue-600 text-2xl font-extrabold">Medvalley</h1>
          <p className="text-green-600 text-sm font-extrabold mt-1">
            International Healthcare, Indian Hospitality
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex flex-wrap justify-center gap-6 px-4 py-4 bg-gray-50 border-b-2 border-gray-300">
        <a href="#home" className="text-red-600 font-medium hover:underline">
          Home
        </a>
        <a href="#about" className="text-blue-600 font-medium hover:underline">
          About Us
        </a>
        <a href="#hospitals" className="text-green-600 font-medium hover:underline">
          Hospitals
        </a>
        <a href="#specialities" className="text-purple-600 font-medium hover:underline">
          Specialities
        </a>
        <a href="#patient-stories" className="text-pink-600 font-medium hover:underline">
          Patient Stories
        </a>
        <a href="#health-tips" className="text-teal-600 font-medium hover:underline">
          Health Tips
        </a>
        <a href="#contact" className="text-orange-600 font-medium hover:underline">
          Contact Us
        </a>
      </nav>
    </>
  );
}
