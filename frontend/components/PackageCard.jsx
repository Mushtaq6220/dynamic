"use client";

import Link from "next/link";
import { BuildingOfficeIcon, PaperAirplaneIcon, DocumentCheckIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PackageCard({ item }) {
  // Premium Islamic/Travel default image if none provided
  const imageSrc =
    item.image ||
    "https://images.unsplash.com/photo-1565552645632-d725f8bfcbee?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="group relative overflow-hidden rounded-[20px] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-[10px]">
      {/* Top Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        {/* Dark overlay gradient for readable badges & rich feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/90 via-transparent to-black/20 z-10 transition-opacity duration-300"></div>
        <img
          src={imageSrc}
          alt={item.name || "Travel Package"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <span className="bg-[var(--surface)]/60 backdrop-blur-md border border-[var(--border)] text-[var(--text)] px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider rounded-full shadow-lg">
            {item.category || item.plan || "Deluxe"}
          </span>
          <span className="bg-[#D4AF37] text-white px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest rounded-full shadow-md self-start">
            Best Deal
          </span>
        </div>
        
        {/* Ratings Highlight */}
        <div className="absolute bottom-4 left-4 z-20 flex items-center bg-black/40 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
           <div className="flex text-[#F3D67A] mr-2">
             {[...Array(5)].map((_, i) => (
               <StarIcon key={i} className={`w-3.5 h-3.5 ${i < 4 ? "text-[#F3D67A]" : "text-gray-400"}`} />
             ))}
           </div>
           <span className="text-white text-[0.7rem] font-bold">4.8</span>
        </div>

        {/* Gold Hover Glow Overlay */}
        <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
      </div>

      {/* Card Content (Translates up on hover to reveal button) */}
      {/* Card Content (Translates up on hover to reveal button) */}
      <div className="px-6 py-6 pb-20 relative z-20 bg-[var(--surface)] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-4">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-[1.35rem] font-bold text-[var(--text)] leading-tight pr-4 serif-heading">
            {item.name}
          </h2>
          <div className="text-right flex-shrink-0">
            <span className="block text-[0.65rem] uppercase tracking-widest text-[var(--text-muted)] mb-0.5 font-bold">
              Starting at
            </span>
            <strong className="text-[1.15rem] tracking-tight text-[#D4AF37] font-bold">
              ₹{item.price}
            </strong>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] mb-5 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
          {item.days} Days Stay • {item.route || "Pilgrimage Route"}
        </p>

        {/* Features row */}
        <div className="flex items-center gap-8 mb-2 pt-5 border-t border-[var(--border)]">
          <div className="flex flex-col items-center gap-1.5 text-[#D4AF37]" title="Premium Hotel Included">
            <BuildingOfficeIcon className="w-5 h-5 opacity-90" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Hotel</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[#D4AF37]" title="Return Flight Included">
            <PaperAirplaneIcon className="w-5 h-5 opacity-90" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Flight</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-[#D4AF37]" title="Visa Assistance">
            <DocumentCheckIcon className="w-5 h-5 opacity-90" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text)]">Visa</span>
          </div>
        </div>

        {/* Hidden CTA Button, slides up and fades in */}
        <div className="absolute left-6 right-6 bottom-0 translate-y-12 opacity-0 group-hover:translate-y-6 group-hover:opacity-100 transition-all duration-500 delay-75">
          <Link
            href={`/packages/${item._id || "view"}`}
            className="block w-full text-center py-3.5 rounded-full gold-glow text-[0.85rem] uppercase font-bold tracking-widest shadow-[0_8px_20px_rgba(212,175,55,0.4)]"
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </div>
  );
}
