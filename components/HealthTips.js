"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/client";

export default function HealthTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      const query = `*[_type == "healthTip" && isActive == true] | order(order asc) [0...6]`;
      const data = await client.fetch(query);
      setTips(data);
    };
    fetchTips();
  }, []);

  if (tips.length === 0) {
    return (
      <section id="health-tips" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-10">
            Health Tips
          </h2>
          <p className="text-gray-500">No tips available yet.</p>
        </div>
      </section>
    );
  }

  const bgColors = ["bg-teal-50", "bg-indigo-50", "bg-pink-50"];

  return (
    <section id="health-tips" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Health Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={tip._id}
              className={`p-6 shadow-lg rounded-lg ${bgColors[idx % 3]}`}
            >
              {tip.icon && (
                <img
                  src={urlFor(tip.icon).width(80).height(80).url()}
                  alt={tip.title}
                  className="w-16 h-16 mb-3 mx-auto"
                />
              )}
              <h3 className="text-lg font-semibold mb-2 text-zinc-900">
                {tip.title}
              </h3>
              <p className="text-gray-700 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
