import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919523534038?text=Hello%20MedValley,%20I%20need%20medical%20assistance"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1ea952] transition-all hover:scale-110 animate-pulse"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
