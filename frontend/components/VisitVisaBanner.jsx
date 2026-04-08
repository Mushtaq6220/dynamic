"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const visaSlides = [
  {
    title: "Global Visit Visas",
    desc: "Seamlessly processing tourist and family visit visas for your favorite destinations.",
    image: "https://images.unsplash.com/photo-1544015759-111059b04884?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Gulf Specialists",
    desc: "Dedicated expertise for UAE, Saudi, Qatar, and Oman visit visa categories.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600",
  }
];

export default function VisitVisaBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % visaSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden mb-12 shadow-xl border border-[var(--border)] bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={visaSlides[index].image} 
            alt="Visa Banner" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute inset-y-0 left-0 flex items-center p-12 z-10 max-w-xl">
            <div>
              <motion.h3 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-3xl md:text-5xl font-bold mb-4 font-serif drop-shadow-xl"
              >
                {visaSlides[index].title}
              </motion.h3>
              <motion.p 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-sm md:text-lg font-medium leading-relaxed drop-shadow-lg"
              >
                {visaSlides[index].desc}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 right-10 flex gap-3 z-20">
        {visaSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[var(--secondary)] w-10' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
