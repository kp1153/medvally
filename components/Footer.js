"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Media Section */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <a
            href="https://www.youtube.com/@medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            YouTube
          </a>
          <a
            href="https://facebook.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            Instagram
          </a>
          <a
            href="https://snapchat.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            Snapchat
          </a>
          <a
            href="https://t.me/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            Telegram
          </a>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-indigo-700 pt-4">
          <div className="text-left">
            <p>© {new Date().getFullYear()} Medvalley. All Rights Reserved.</p>
            <p>Trusted Medical Tourism Company in India</p>
          </div>

          <div className="text-right">
            <a
              href="https://www.web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-pink-300 hover:text-white font-semibold transition"
            >
              Web Developer: Kamta Prasad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
