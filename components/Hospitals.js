"use client";
import { useState } from "react";
import { MapPin, Building2, Search, MessageCircle, CheckCircle } from "lucide-react";

const hospitalData = {
  Delhi: [
    "AIIMS Delhi",
    "Apollo Hospital Delhi",
    "Fortis Escorts Heart Institute",
    "BLK-Max Super Specialty Hospital",
    "Sir Ganga Ram Hospital",
    "Max Super Specialty Saket",
    "Indraprastha Apollo Hospital",
    "Venkateshwar Hospital",
  ],
  Gurugram: [
    "Medanta The Medicity",
    "Artemis Hospital",
    "Fortis Memorial Research Institute",
    "Paras Hospital",
    "Max Hospital Gurgaon",
    "CK Birla Hospital",
  ],
  Noida: [
    "Jaypee Hospital",
    "Fortis Noida",
    "Kailash Hospital",
    "Metro Hospital",
    "Apollo Spectra",
  ],
  Faridabad: [
    "Asian Institute of Medical Sciences",
    "Sarvodaya Hospital",
    "Fortis Escorts Faridabad",
    "Metro Hospital Faridabad",
  ],
  Chandigarh: [
    "Max Super Specialty Mohali",
    "Fortis Mohali",
    "Ivy Hospital",
    "Healing Hospital",
  ],
  Ludhiana: [
    "Dayanand Medical College Hospital",
    "Fortis Ludhiana",
    "SPS Hospitals",
    "Christian Medical College",
  ],
  Mumbai: [
    "Lilavati Hospital",
    "Kokilaben Dhirubhai Ambani Hospital",
    "Nanavati Hospital",
    "Hinduja Hospital",
    "Tata Memorial Hospital",
  ],
  Pune: [
    "Ruby Hall Clinic",
    "Jehangir Hospital",
    "Sahyadri Hospitals",
    "Manipal Hospital Pune",
  ],
  Bangalore: [
    "Narayana Health",
    "Manipal Hospital",
    "Fortis Bannerghatta",
    "Aster CMI",
    "Apollo Bangalore",
  ],
  Chennai: [
    "Apollo Hospital Chennai",
    "MIOT Hospital",
    "Fortis Malar",
    "SIMS Hospital",
    "Gleneagles Global",
  ],
  Hyderabad: [
    "Yashoda Hospitals",
    "Care Hospitals",
    "KIMS",
    "AIG Hospitals",
    "Continental Hospitals",
  ],
  Kolkata: [
    "AMRI Hospital",
    "Apollo Gleneagles",
    "Fortis Kolkata",
    "RN Tagore Hospital",
  ],
  Ahmedabad: [
    "Shalby Hospital",
    "Apollo Ahmedabad",
    "CIMS Hospital",
    "Sterling Hospital",
  ],
  Jaipur: [
    "Mahatma Gandhi Medical College",
    "Fortis Jaipur",
    "CK Birla Hospital Jaipur",
    "Manipal Hospital Jaipur",
  ],
  Kochi: [
    "Aster Medcity",
    "Lakeshore Hospital",
    "Amrita Hospital",
    "Renai Medicity",
  ],
  Varanasi: ["Kashi Panchakarma Hospital"],
};

export default function Hospitals() {
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    if (!city || !hospital) {
      alert("Please select both city and hospital.");
      return;
    }
    setResult(`${hospital}, ${city}`);
  };

  return (
    <section id="hospitals" className="py-20 px-6 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              🏥 Hospital Network
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-4">
            Choose the Right Hospital
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select from our network of 50+ top-tier hospitals across India
          </p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* City Selector */}
            <div className="flex-1 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select City
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-gray-800 appearance-none cursor-pointer bg-white font-medium"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setHospital("");
                    setResult("");
                  }}
                >
                  <option value="">Choose a city</option>
                  {Object.keys(hospitalData).map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hospital Selector */}
            <div className="flex-1 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Hospital
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-gray-800 appearance-none cursor-pointer bg-white font-medium disabled:bg-gray-50 disabled:cursor-not-allowed"
                  value={hospital}
                  onChange={(e) => {
                    setHospital(e.target.value);
                    setResult("");
                  }}
                  disabled={!city}
                >
                  <option value="">Choose a hospital</option>
                  {city &&
                    hospitalData[city].map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>

          {/* Result Card */}
          {result && (
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Hospital Selected
                  </h3>
                  <p className="text-gray-700 text-lg mb-4 font-medium">
                    {result}
                  </p>
                  <a
                    href="https://wa.me/919523534038"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">50+ Hospitals</h3>
            <p className="text-gray-600 text-sm">Pan-India network of accredited hospitals</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">NABH Accredited</h3>
            <p className="text-gray-600 text-sm">All hospitals meet international standards</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Round-the-clock assistance for patients</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}