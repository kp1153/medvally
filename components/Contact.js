'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-4">We are available to assist 24/7 for international patients.</p>

        <div className="space-y-3 text-left inline-block text-gray-800">
          <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/919523534038" className="text-teal-600 hover:underline">+91-9523534038</a></p>
          <p><strong>Email:</strong> <a href="mailto:medvalleypvtltd@gmail.com" className="text-teal-600 hover:underline">medvalleypvtltd@gmail.com</a></p>
          <p><strong>Address:</strong> 8A/5A, 2nd Floor, Gandhi Park Lane, Hauz Rani, Malviya Nagar, 110017</p>
        </div>
      </div>
    </section>
  );
}
