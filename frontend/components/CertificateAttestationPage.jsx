"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DocumentCheckIcon,
  IdentificationIcon,
  CheckBadgeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function CertificateAttestationPage() {
  const [activeCountry, setActiveCountry] = useState("uae");

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Country Data with Dynamic Messages
  const countryData = [
    {
      id: "uae",
      name: "UAE",
      flag: "🇦🇪",
      notes: ["MOFA attestation required", "Educational certificates need verification"],
      message: "Hello, I would like assistance with UAE certificate attestation. Could you please guide me through the process?",
    },
    {
      id: "saudi",
      name: "Saudi Arabia",
      flag: "🇸🇦",
      notes: ["Saudi Cultural Attestation required", "Employer-related documentation may be needed"],
      message: "Hello, I would like to proceed with Saudi Arabia certificate attestation. Kindly provide the required details and next steps.",
    },
    {
      id: "kuwait",
      name: "Kuwait",
      flag: "🇰🇼",
      notes: ["Embassy attestation mandatory", "Degree verification required"],
      message: "Hello, I am interested in Kuwait certificate attestation. Please share the process and required documents.",
    },
    {
      id: "bahrain",
      name: "Bahrain",
      flag: "🇧🇭",
      notes: ["Standard attestation process", "Supporting ID proof required"],
      message: "Hello, I would like to know more about Bahrain certificate attestation. Kindly assist me with the procedure.",
    },
    {
      id: "qatar",
      name: "Qatar",
      flag: "🇶🇦",
      notes: ["MOFA + Embassy attestation", "Additional verification for education documents"],
      message: "Hello, I would like assistance with Qatar certificate attestation. Please guide me with the requirements and process.",
    },
  ];

  const activeData = countryData.find(c => c.id === activeCountry) || countryData[0];
  const encodedWhatsappUrl = `https://wa.me/919429113645?text=${encodeURIComponent(activeData.message)}`;

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)] overflow-hidden font-sans min-h-screen">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF6FF] to-[var(--bg)] dark:from-[#0A0F1C] dark:to-[var(--bg)] z-0"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-white dark:bg-[#1E293B] shadow-sm flex items-center justify-center mb-6">
            <DocumentCheckIcon className="w-8 h-8 text-[var(--primary)] dark:text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B3C5D] dark:text-[#F9FAFB] mb-6 tracking-tight serif-heading">
            Certificate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#0284C7] dark:from-[#D4AF37] dark:to-[#F3D67A] italic font-light">Attestation Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
            Reliable attestation support for international travel, employment, and education. Ensure your documents are recognized globally.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 & 3: INTERACTIVE SELECTION & DOCUMENTS */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* LEFT: COUNTRY SELECTION */}
          <div className="lg:w-[40%] flex flex-col">
            <h3 className="text-[var(--primary)] dark:text-[#D4AF37] font-bold tracking-[0.1em] uppercase text-xs mb-6 px-2 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4"/> Select Destination
            </h3>
            
            {/* Scrollable on small mobile, grid on wider */}
            <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-1 pb-4 hide-scrollbar snap-x">
              {countryData.map((country) => {
                const isActive = activeCountry === country.id;
                
                return (
                  <button
                    key={country.id}
                    onClick={() => setActiveCountry(country.id)}
                    className={`
                      snap-start flex-shrink-0 w-[180px] lg:w-full flex items-center gap-4 p-4 lg:p-5 rounded-[20px] transition-all duration-300 text-left border relative overflow-hidden group
                      ${isActive 
                        ? 'bg-[#0EA5E9] border-[#0284C7] shadow-md scale-[1.02] z-10' 
                        : 'bg-white border-[#BAE6FD] shadow-sm hover:bg-[#F0F9FF] opacity-90 hover:opacity-100 hover:scale-[1.01] z-0'}
                    `}
                  >
                    {/* Active internal glow line */}
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#0284C7]"></div>
                    )}
                    
                    <div className={`text-3xl filter transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-md grayscale-0' : 'group-hover:scale-105'}`}>
                      {country.flag}
                    </div>
                    <div>
                      <span className={`block font-bold text-lg transition-colors ${isActive ? 'text-white' : 'text-[#0B3C5D] group-hover:text-[#0EA5E9]'}`}>
                        {country.name}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT: DYNAMIC REQUIREMENTS */}
          <div className="lg:w-[60%] flex flex-col justify-start">
            <h3 className="text-[var(--primary)] dark:text-[#D4AF37] font-bold tracking-[0.1em] uppercase text-xs mb-6 px-2 flex items-center gap-2">
              <DocumentCheckIcon className="w-4 h-4"/> Required Documentation
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-gradient-to-br from-[#F0F9FF] to-white border border-[#BAE6FD] rounded-[24px] p-8 shadow-[0_10px_30px_rgba(14,165,233,0.1)] flex flex-col h-full relative overflow-hidden"
              >
                {/* Background watermarked flag */}
                <div className="absolute -right-10 -bottom-10 text-[180px] opacity-[0.04] pointer-events-none filter blur-[2px] transform rotate-[-15deg]">
                  {activeData.flag}
                </div>

                <div className="relative z-10 flex-grow">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B3C5D] mb-8 flex items-center gap-3">
                    {activeData.flag} {activeData.name} Requirements
                  </h2>
                  
                  {/* General Documents (Constant Structure, fades in via stagger) */}
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-10">
                    <h4 className="font-bold text-[#0B3C5D] mb-4 text-sm border-b border-[#BAE6FD] pb-2">General Documents</h4>
                    <ul className="space-y-4">
                      <motion.li variants={fadeUp} className="flex items-start gap-4 p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-transparent hover:border-[#BAE6FD] transition-colors">
                        <DocumentCheckIcon className="w-6 h-6 text-[#0EA5E9] flex-shrink-0" />
                        <span className="text-[#334155] font-medium mt-0.5">Original Certificate (Degree / Birth / Marriage)</span>
                      </motion.li>
                      <motion.li variants={fadeUp} className="flex items-start gap-4 p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-transparent hover:border-[#BAE6FD] transition-colors">
                        <IdentificationIcon className="w-6 h-6 text-[#0EA5E9] flex-shrink-0" />
                        <span className="text-[#334155] font-medium mt-0.5">Passport Copy</span>
                      </motion.li>
                      <motion.li variants={fadeUp} className="flex items-start gap-4 p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-transparent hover:border-[#BAE6FD] transition-colors">
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-[#E0F2FE] flex-shrink-0">
                          <svg className="w-4 h-4 text-[#0EA5E9]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                        <span className="text-[#334155] font-medium mt-0.5">Passport-size Photos</span>
                      </motion.li>
                      <motion.li variants={fadeUp} className="flex items-start gap-4 p-3 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-transparent hover:border-[#BAE6FD] transition-colors">
                        <div className="w-6 h-6 rounded flex items-center justify-center bg-[#E0F2FE] flex-shrink-0">
                          <span className="text-[#0EA5E9] font-bold text-xs font-serif">A</span>
                        </div>
                        <span className="text-[#334155] font-medium mt-0.5">Authorization Letter (if required)</span>
                      </motion.li>
                    </ul>
                  </motion.div>

                  {/* Specific Country Notes */}
                  <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                    <h4 className="font-bold text-[#0B3C5D] mb-4 text-sm border-b border-[#BAE6FD] pb-2">Country Specific Rules</h4>
                    <ul className="space-y-4">
                      {activeData.notes.map((note, idx) => (
                        <motion.li key={idx} variants={fadeUp} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#7DD3FC] shadow-sm hover:border-[#0EA5E9] hover:shadow-md transition-all">
                          <CheckBadgeIcon className="w-6 h-6 text-[#0EA5E9] flex-shrink-0" />
                          <span className="text-[#0B3C5D] font-bold text-sm leading-relaxed mt-0.5">
                            {note}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* SECTION 4: WHATSAPP CTA - Dynamic locked to bottom of card */}
                <div className="relative z-10 mt-12 pt-8 border-t border-[#BAE6FD] flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                     <p className="text-sm font-bold text-[#0B3C5D] mb-1">Ready to proceed?</p>
                     <p className="text-xs text-[#334155] max-w-[200px]">Connect directly with our {activeData.name} attestation experts.</p>
                  </div>
                  <a 
                    href={encodedWhatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] dark:from-[#D4AF37] dark:to-[#E5C158] flex items-center gap-3 text-white dark:text-[#0A0F1C] font-bold shadow-md hover:shadow-[0_10px_20px_rgba(2,132,199,0.3)] dark:hover:shadow-[0_5px_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all w-full sm:w-auto justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <svg className="w-5 h-5 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span className="relative z-10 transition-transform group-hover:translate-x-1">More Info on WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* Global CSS to hide scrollbar on mobile horizontal view */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </main>
  );
}
