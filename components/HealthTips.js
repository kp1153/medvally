"use client";

export default function HealthTips() {
  return (
    <section id="health-tips" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Health Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-lg bg-teal-50">
            <h3 className="text-lg font-semibold mb-2">
              Prevent Heart Disease
            </h3>
            <p className="text-gray-700 text-sm">
              Eat healthy, avoid smoking, exercise 30 minutes daily.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg bg-indigo-50">
            <h3 className="text-lg font-semibold mb-2">Control Diabetes</h3>
            <p className="text-gray-700 text-sm">
              Limit sugar, monitor diet, and stay active.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-lg bg-teal-50">
            <h3 className="text-lg font-semibold mb-2">Boost Immunity</h3>
            <p className="text-gray-700 text-sm">
              Add vitamin C, zinc, and turmeric to your diet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
