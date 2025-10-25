"use client";
import { useState } from "react";

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
    if (!city || !hospital)
      return alert("Please select both city and hospital.");
    setResult(`${hospital}, ${city}`);
  };

  return (
    <section id="hospitals" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4 text-indigo-700">
        Choose the right hospital for you
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setHospital("");
          }}
        >
          <option value="">Select City</option>
          {Object.keys(hospitalData).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          disabled={!city}
        >
          <option value="">Select Hospital</option>
          {city &&
            hospitalData[city].map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded"
        >
          🔍 Search
        </button>
      </div>

      {result && (
        <div className="text-center bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">{result}</h3>
          <a
            href="https://wa.me/919523534038"
            target="_blank"
            className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded shadow"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      )}
    </section>
  );
}
