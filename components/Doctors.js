"use client";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Naresh Trehan",
      speciality: "Cardiothoracic & Vascular Surgery",
      img: "/doctors/naresh-trehan.jpg",
      location: "Gurugram, Haryana",
    },
    {
      name: "Dr. Ashok Seth",
      speciality: "Interventional Cardiology",
      img: "/doctors/ashok-seth.jpg",
      location: "New Delhi",
    },
    {
      name: "Dr. Krishna Subramony Iyer",
      speciality: "Paediatric Cardiac Surgery",
      img: "/doctors/krishna-subramony-iyer.jpg",
      location: "Delhi NCR",
    },
    {
      name: "Dr. Raghu Ram Pillarisetti",
      speciality: "Breast Cancer Surgery & Screening",
      img: "/doctors/raghu-ram-pillarisetti.jpg",
      location: "Hyderabad, Telangana",
    },
    {
      name: "Dr. Sandeep Vaishya",
      speciality: "Neurosurgery & Spine Surgery",
      img: "/doctors/sandeep-vaishya.jpg",
      location: "Gurugaon, Haryana",
    },
    {
      name: "Dr. Subhash Gupta",
      speciality: "Liver Transplant & HPB Surgery",
      img: "/doctors/subhash-gupta.jpg",
      location: "New Delhi",
    },
    {
      name: "Dr. Kamal Kiran Mukkavilli",
      speciality: "Nephrology & Kidney Transplant",
      img: "/doctors/kamal-kiran-mukkavilli.jpg",
      location: "Hyderabad, Telangana",
    },
    {
      name: "Dr. Prakash M. Doshi",
      speciality: "Orthopaedic Joint Replacement",
      img: "/doctors/prakash-doshi.jpg",
      location: "Mumbai, Maharashtra",
    },
    {
      name: "Dr. Rana Patir",
      speciality: "Neurosurgery & Skull-Base Surgery",
      img: "/doctors/rana-patir.jpg",
      location: "Delhi NCR",
    },
    {
      name: "Dr. A. S. Soin",
      speciality: "Liver Transplantation & Hepatobiliary Surgery",
      img: "/doctors/a-s-soin.jpg",
      location: "Gurugaon, Haryana",
    },
  ];

  return (
    <section id="doctors" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Leading Medical Specialists
        </h2>
        <div className="text-gray-700 text-lg mb-10 max-w-4xl mx-auto space-y-4">
          <p>
            We collaborate with India's top-tier doctors and specialists across various medical disciplines who are recognized nationally and internationally for their expertise. Our network includes leading specialists in cardiology, oncology, neurology, orthopedics, liver transplant, kidney transplant, and numerous other critical medical fields.
          </p>
          <p>
            These distinguished physicians bring decades of clinical experience, international training from premier medical institutions, and track records of thousands of successful procedures. Their excellence lies not only in their technical mastery but also in their compassionate patient-centered approach and unwavering dedication to healing. We ensure that each international patient is connected with the most suitable and qualified specialist for their specific medical condition.
          </p>
          <p>
            While our team regularly works with the esteemed medical professionals listed below, our network extends far beyond these names. Based on your unique requirements, we can identify and connect you with the best specialist in any city across India. Some of the prominent names in our network include:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-zinc-900">{doc.name}</h3>
                <p className="text-teal-600 text-sm mb-1">{doc.speciality}</p>
                <p className="text-gray-600 text-sm">{doc.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}