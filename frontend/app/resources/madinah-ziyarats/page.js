"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { madinahZiyaratSpots } from "../../../data/ziyaratData";
import { MapPinIcon, ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-[24px] overflow-hidden group cursor-pointer border border-[#E2E8F0] dark:border-transparent">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#061A2B]/90 via-transparent to-transparent opacity-60"></div>

      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#D4AF37] hover:scale-110 z-20">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#D4AF37] hover:scale-110 z-20">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
              <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-[#D4AF37] w-6 shadow-[0_0_10px_#D4AF37]" : "bg-white/60 w-2"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function MadinahZiyaratPage() {
  const filteredSpots = madinahZiyaratSpots;

  const whatsappUrl = "https://wa.me/916281144625?text=Hello,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services.%20Can%20you%20please%20assist%20me?";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 dark:from-[#061A2B] dark:to-[#0B3C5D] text-[#334155] dark:text-[#CBD5E1] font-sans pb-24 relative overflow-hidden transition-colors duration-500">

      {/* Background Soft Glows */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/10 dark:bg-green-400/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-16 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center space-x-2 text-sm font-semibold text-[#0B3C5D] dark:text-blue-300 bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-[#0B3C5D]/10 dark:border-white/10 shadow-sm">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors tracking-wide">Home</Link>
          <span className="opacity-50">/</span>
          <Link href="/resources" className="hover:text-[#D4AF37] transition-colors tracking-wide">Resources</Link>
          <span className="opacity-50">/</span>
          <span className="text-[#D4AF37] tracking-wide">Madinah Ziyarats</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] dark:text-white mb-2 tracking-tight drop-shadow-md font-serif">
            Madinah Ziyarats
          </h1>
          <motion.div
            initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full opacity-80"
          />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl md:text-2xl text-[#334155] dark:text-[#E2E8F0] max-w-3xl font-medium leading-relaxed drop-shadow-sm mt-4">
          Experience the tranquility of the Prophet's City and visit sites of profound early Islamic history.
        </motion.p>
      </section>

      {/* TIMELINE DIVIDER (BG) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16 relative">

          {/* Vertical subtle timeline line in desktop */}
          <div className="absolute left-8 lg:left-[50%] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 hidden lg:block -translate-x-1/2 pointer-events-none"></div>

          {filteredSpots.map((spot, index) => (
            <motion.div
              key={spot.slug}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white/90 dark:bg-[#061A2B]/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[40px] p-4 lg:p-6 gap-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#D4AF37]/40 relative`}
            >

              {/* Timeline Dot (Desktop) */}
              <div className={`hidden lg:block absolute top-[50%] -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-[#D4AF37] bg-white dark:bg-[#0B3C5D] z-10 shadow-[0_0_15px_rgba(212,175,55,0.6)] ${index % 2 === 0 ? 'lg:right-[calc(50%-8px)] lg:left-auto lg:translate-x-0 !left-[calc(50%-8px)]' : 'lg:left-[calc(50%-8px)] lg:translate-x-0'}`}></div>

              {/* Content Side */}
              <div className="flex-1 flex flex-col justify-center px-4 py-4 lg:px-8">
                <div className="inline-flex max-w-max items-center px-4 py-1.5 rounded-full bg-[#E2E8F0] dark:bg-white/10 text-[#0F172A] dark:text-[#E2E8F0] text-xs font-bold uppercase tracking-wider mb-4 border border-transparent dark:border-white/20 shadow-sm">
                  {spot.slug === "masjid-quba" || spot.slug === "masjid-al-qiblatayn" ? "Historic Mosque" : "Spiritual Landmark"}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0F172A] dark:text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{spot.name}</h2>
                <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm md:text-base mb-6 bg-[#D4AF37]/10 max-w-max px-3 py-1 rounded-lg">
                  <MapPinIcon className="w-5 h-5 flex-shrink-0" />
                  {spot.location}
                </div>

                <p className="text-[17px] leading-relaxed text-[#475569] dark:text-[#CBD5E1] mb-8 font-medium">
                  {spot.description}
                </p>

                <div className="space-y-4 mt-auto border-t border-[#E2E8F0] dark:border-white/10 pt-6">
                  {spot.highlights.map((hlt, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="bg-[#D4AF37]/10 p-1.5 rounded-full mt-0.5">
                        <CheckCircleIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      </div>
                      <span className="text-[#1E293B] dark:text-[#E2E8F0] font-semibold text-[15px]">{hlt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:w-5/12 w-full h-[350px] lg:h-[450px]">
                <ImageSlider images={spot.images} />
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 delay-75"></span>
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-white relative z-10 group-hover:-rotate-6 transition-transform duration-300" />
      </a>

    </div>
  );
}
