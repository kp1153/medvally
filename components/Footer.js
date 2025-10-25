"use client";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Medvalley. All Rights Reserved.
        </p>
        <p className="text-sm mb-4">Trusted Medical Tourism Company in India</p>

        <p className="mt-2">
          <a
            href="https://www.web-developer-kp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 font-bold py-2 px-4 rounded-lg shadow-md hover:opacity-95 transition"
            aria-label="Web Developer Kamta Prasad - Visit website"
          >
            Web Developer: Kamta Prasad
          </a>
        </p>

        <p className="text-xs text-indigo-200 mt-4">
          Contact:{" "}
          <a href="mailto:medvalleypvtltd@gmail.com" className="underline">
            medvalleypvtltd@gmail.com
          </a>{" "}
          • +91-9523534038
        </p>
      </div>
    </footer>
  );
}
