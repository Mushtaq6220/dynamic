"use client";

import { useState } from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";

const supportLinks = [
  { label: "Phone", icon: <PhoneIcon className="w-5 h-5" />, href: "tel:+919951335542" },
  { label: "Email", icon: <EnvelopeIcon className="w-5 h-5" />, href: "mailto:support@hajjumrahtravels.com" },
  { label: "WhatsApp", icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />, href: "https://wa.me/919951335542?text=Assalamu%20Alaikum%20wa%20Rahmatullahi%20wa%20Barakatuh,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20Hajj%20and%20Umrah%20services.%20Kindly%20assist%20me" },
];
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
      {/* Menu overlay - fades and slide up */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-left ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
      >
        {supportLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/50 text-[var(--primary)] font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
          >
            {item.icon}
            <span className="text-sm tracking-wide">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label="Connect with us"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#E5C158] text-white shadow-[0_8px_30px_rgba(212,175,55,0.5)] transition-transform duration-300 hover:scale-110"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-75"></span>
        <span className="absolute inset-[-6px] rounded-full border border-[#D4AF37]/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></span>

        {/* Icon */}
        {open ? (
          <XMarkIcon className="w-6 h-6 relative z-10 transition-transform duration-300" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
