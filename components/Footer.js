"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Social Media Section */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-400 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.19-3L10 9v6zm12-3c0-2.52-.21-4.13-.46-5.06-.23-.88-.91-1.57-1.79-1.8C18.06 5.71 12 5.71 12 5.71s-6.06 0-7.75.43c-.88.23-1.56.92-1.79 1.8C2.21 7.87 2 9.48 2 12s.21 4.13.46 5.06c.23.88.91 1.57 1.79 1.8 1.69.43 7.75.43 7.75.43s6.06 0 7.75-.43c.88-.23 1.56-.92 1.79-1.8.25-.93.46-2.54.46-5.06z" />
            </svg>
            YouTube
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8v-2.88h2.5V9.41c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.22.19 2.22.19v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.86H16.9l-.4 2.88h-2.22v6.99A10 10 0 0022 12z" />
            </svg>
            Facebook
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-400 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zm4.75-.95a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
            Instagram
          </a>

          {/* Snapchat */}
          <a
            href="https://snapchat.com/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c2.21 0 4 1.79 4 4v1.38c1.44.81 2.43 2.31 2.43 4.03 0 1.01-.28 2.02-.78 2.86-.36.59-.54 1.05-.54 1.45 0 .32.11.59.34.87.26.31.69.56 1.29.76.36.12.57.51.46.88-.1.32-.4.54-.73.54-.04 0-.09 0-.13-.01-.58-.1-1.11-.15-1.57-.15-.57 0-1.04.1-1.43.3-1.17.59-2.57.89-4.17.89s-3-.3-4.17-.89c-.39-.2-.86-.3-1.43-.3-.46 0-.99.05-1.57.15-.04.01-.09.01-.13.01-.33 0-.63-.22-.73-.54a.75.75 0 01.46-.88c.6-.2 1.03-.45 1.29-.76.23-.28.34-.55.34-.87 0-.4-.18-.86-.54-1.45-.5-.84-.78-1.85-.78-2.86 0-1.72.99-3.22 2.43-4.03V6c0-2.21 1.79-4 4-4z" />
            </svg>
            Snapchat
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/medvalleypvtltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-300 transition"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 3.5L2.5 10.5c-1 .4-1 1.8 0 2.2l4.9 1.8 2 6.1c.3 1 1.6 1.1 2.1.2l3-4.9 5.2 3.8c.9.7 2.2.2 2.4-.9l3-14c.3-1.1-.8-2-1.8-1.6z" />
            </svg>
            Telegram
          </a>
        </div>

        <div className="flex justify-between items-center text-sm border-t border-indigo-700 pt-4">
          <div>
            <p>© {new Date().getFullYear()} Medvalley. All Rights Reserved.</p>
            <p>Trusted Medical Tourism Company in India</p>
          </div>
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
    </footer>
  );
}
