"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="text-left">
            <p>© {new Date().getFullYear()} Medvalley. All Rights Reserved.</p>
            <p>Trusted Medical Tourism Company in India</p>
          </div>
          <div className="text-right">
            <a href="https://www.web-developer-kp.com" target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-300 hover:text-white transition">
              Web Developer: Kamta Prasad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}