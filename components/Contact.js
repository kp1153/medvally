"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "dabd493e-5e77-46fc-9f7f-dd97214d28d4",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your medical journey today with a free consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#003366] mb-6">
              Send us a message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Message sent successfully! We'll contact you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ✗ Failed to send. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Tell us about your medical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003366] text-white py-4 rounded-lg font-semibold hover:bg-[#0066CC] transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right - Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#003366] mb-8">
              Contact Information
            </h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">Phone</h4>
                  <p className="text-gray-600">+91-9523534038</p>
                  <p className="text-sm text-gray-500">
                    24/7 Helpline Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">Email</h4>
                  <p className="text-gray-600">medvalleypvtltd@gmail.com</p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">
                    Office Location
                  </h4>
                  <p className="text-gray-600">
                    8A/5A, 2nd Floor, Gandhi Park Lane,
                  </p>
                  <p className="text-gray-600">Hauz Rani, Malviya Nagar,</p>
                  <p className="text-gray-600">New Delhi - 110017, India</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFD700]/10 p-6 rounded-2xl border-2 border-[#FFD700]/30">
              <h4 className="font-bold text-[#003366] mb-3">Operating Hours</h4>
              <p className="text-gray-700">Monday - Sunday: 24/7</p>
              <p className="text-sm text-gray-600 mt-2">
                Our team is always available to assist you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
