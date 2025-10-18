// components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-700">
          © {year} सर्वाधिकार सुरक्षित. Website developed by{" "}
          <a
            href="https://www.web-developer-kp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose-500 hover:underline"
            aria-label="Web Developer KP website (opens in new tab)"
          >
            https://www.web-developer-kp.com/
          </a>
        </p>
      </div>
    </footer>
  );
}
