import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
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
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="+1234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#003366] focus:outline-none"
                  placeholder="Tell us about your medical needs..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#003366] text-white py-4 rounded-lg font-semibold hover:bg-[#0066CC] transition flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right - Contact Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#003366] mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">Phone</h4>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                  <p className="text-sm text-gray-500">24/7 Helpline Available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">Email</h4>
                  <p className="text-gray-600">info@medvalley.org</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#003366] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] mb-1">Office Locations</h4>
                  <p className="text-gray-600">New Delhi, India (Headquarters)</p>
                  <p className="text-gray-600">Mumbai, India</p>
                  <p className="text-gray-600">Bangalore, India</p>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFD700]/10 p-6 rounded-2xl border-2 border-[#FFD700]/30">
              <h4 className="font-bold text-[#003366] mb-3">Operating Hours</h4>
              <p className="text-gray-700">Monday - Sunday: 24/7</p>
              <p className="text-sm text-gray-600 mt-2">Our team is always available to assist you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}