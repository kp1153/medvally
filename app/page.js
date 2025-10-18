import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Medvally</h1>
        <p className="text-xl text-gray-600 mb-8">
          Quality Healthcare at Your Doorstep
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-600">Expert doctors available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p className="text-gray-600">24/7 support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Home Delivery</h3>
            <p className="text-gray-600">Medicines at home</p>
          </div>
        </div>
      </section>
    </div>
  );
}
