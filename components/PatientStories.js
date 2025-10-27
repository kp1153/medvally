"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/client";

export default function PatientStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const query = `*[_type == "patientStory" && isActive == true] | order(order asc) [0...6]`;
      const data = await client.fetch(query);
      setStories(data);
    };
    fetchStories();
  }, []);

  if (stories.length === 0) {
    return (
      <section id="patient-stories" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-10">
            Patient Success Stories
          </h2>
          <p className="text-gray-500">No stories available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="patient-stories" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Patient Success Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story._id} className="bg-white shadow-lg rounded-lg p-6">
              {story.image && (
                <img
                  src={urlFor(story.image).width(300).height(200).url()}
                  alt={story.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-gray-700 italic mb-4">"{story.testimonial}"</p>
              <h4 className="font-bold text-teal-600">
                — {story.name}, {story.country}
              </h4>
              {story.treatment && (
                <p className="text-xs text-gray-500 mt-2">
                  Treatment: {story.treatment}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
