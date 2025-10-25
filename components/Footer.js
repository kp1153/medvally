"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Medvalley. All Rights Reserved.
        </p>
        <p className="text-sm mb-4">Trusted Medical Tourism Company in India</p>

        <p className="text-xs text-indigo-200 mt-4">
          Contact:{" "}
          <a href="mailto:medvalleypvtltd@gmail.com" className="underline">
            medvalleypvtltd@gmail.com
          </a>{" "}
          • +91-9523534038
        </p>
      </div>

      <div className="mt-4 text-left px-4">
        <a
          href="https://www.web-developer-kp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-pink-400 font-semibold hover:text-white transition underline"
          aria-label="Web Developer Kamta Prasad - Visit website"
        >
          Web Developer: Kamta Prasad
        </a>
      </div>
    </footer>
  );
}