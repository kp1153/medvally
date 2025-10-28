"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/sanity/client";
import { Quote, MapPin, Heart, Star } from "lucide-react";

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
      <section
        id="patient-stories"
        className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              💬 Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-6">
            Patient Success Stories
          </h2>
          <p className="text-gray-500">
            No stories available yet. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="patient-stories"
      className="py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
              💬 Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 mb-6">
            Patient Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their medical
            journey
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story._id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              {story.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={urlFor(story.image).width(400).height(300).url()}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 italic mb-4 line-clamp-4 leading-relaxed">
                  "{story.testimonial}"
                </p>

                {/* Patient Info */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{story.name}</h4>
                      {story.country && (
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <MapPin className="w-3 h-3" />
                          {story.country}
                        </div>
                      )}
                    </div>
                  </div>

                  {story.treatment && (
                    <div className="bg-purple-50 rounded-lg px-3 py-2 text-sm">
                      <span className="text-purple-600 font-medium">
                        Treatment:
                      </span>
                      <span className="text-gray-700 ml-1">
                        {story.treatment}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who chose Medvalley for their
            medical journey
          </p>
          <a
            href="#cost"
            className="inline-block bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
