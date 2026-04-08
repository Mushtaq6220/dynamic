"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheckIcon, GlobeAmericasIcon, HeartIcon, AcademicCapIcon
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function PilgrimageHome({ packages = [], flights = [] }) {
  const [activeTab, setActiveTab] = useState("Deluxe");
  const tabs = ["Super Saver", "Affordable", "Deluxe"];

  const filteredPackages = packages.filter((p) => {
    const category = p.category || p.plan || "Deluxe";
    return category.toLowerCase().includes(activeTab.toLowerCase());
  });

  const displayPackages = filteredPackages.length > 0 ? filteredPackages.slice(0, 3) : packages.slice(0, 3);

  return (
    <main className="relative bg-transparent">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] min-h-[500px] overflow-hidden">
        {/* Swiper Background Slider */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Keyboard]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={true}
            grabCursor={true}
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            className="w-full h-full hero-slider"
          >
            <style>{`
              .hero-slider .swiper-pagination-bullet {
                background-color: white;
                opacity: 0.6;
                width: 10px;
                height: 10px;
                transition: all 0.3s ease;
              }
              .hero-slider .swiper-pagination-bullet-active {
                background-color: #e4e40fff;
                opacity: 1;
                width: 28px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 56, 224, 0.97);
              }
              .hero-slider .swiper-pagination {
                bottom: 30px !important;
                z-index: 50;
              }
            `}</style>
            {[
              {
                src: "/banner.png",
                showText: false,
                showButtonOnly: true,
                badge: "FLY INTERNATIONAL tours & Travels"
              },
              {
                src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000",
                showText: true,
                title: "Where Faith Meets",
                highlight: "Journey",
                subtitle: "Experience Hajj & Umrah with peace and care."
              },
              {
                src: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=2000",
                showText: true,
                title: "From Your City to the",
                highlight: "Holy Land",
                subtitle: "We take care of everything for you."
              },
              {
                src: "https://res.cloudinary.com/greenappletravel-ae/image/upload/v1766559767/greenapple/tours/main/umrah-package-makkah-madinah_1766559766.webp",
                showText: true,
                title: "Your Spiritual Journey,",
                highlight: "Our Responsibility",
                subtitle: "Excellence in every step."
              },
              {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwRJnoQesLtWzT1aPpJpQAdqk0MjMekCyxQ&s",
                showText: true,
                title: "Seamless & Secure",
                highlight: "Pilgrimage",
                subtitle: "Premium packages with comfort and affordability."
              }
            ].map((banner, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full overflow-hidden">
                  <div className={`absolute inset-0 z-10 pointer-events-none ${banner.showText ? 'bg-black/50' : 'bg-black/10'}`}></div>
                  <img src={banner.src} alt={`Banner ${i}`} className="w-full h-full object-cover object-[center_top] md:object-center" />

                  {(banner.showText || banner.showButtonOnly) && (
                    <div className={`absolute inset-0 z-20 h-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none ${banner.showText ? 'justify-center text-center py-20' : 'justify-between text-center pt-16 md:pt-20 pb-24 md:pb-32'}`}>
                      {/* Top Badge for first banner upside placement */}
                      {banner.showButtonOnly && banner.badge && (
                        <motion.div
                          initial={{ opacity: 0, y: -40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="pointer-events-auto"
                        >
                          <span className="inline-block py-2 px-8 rounded-full bg-black/30 backdrop-blur-2xl border border-white/10 text-[#D4AF37] tracking-[0.4em] text-[11px] font-black uppercase shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                            {banner.badge}
                          </span>
                        </motion.div>
                      )}

                      {/* Main Content Area */}
                      <motion.div
                        initial={banner.showText ? { opacity: 0, scale: 0.95 } : { opacity: 0, y: 30 }}
                        animate={banner.showText ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="pointer-events-auto flex flex-col items-center"
                      >
                        {banner.showText && (
                          <>
                            <span className="inline-block py-2 px-6 mb-8 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-[#D4AF37] tracking-[0.3em] text-[10px] font-bold uppercase shadow-2xl">
                              {banner.badge || "Fly International Tours & Travels"}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl leading-tight serif-heading">
                              {banner.title} <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A] italic">{banner.highlight}</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-200 font-medium max-w-2xl mx-auto mb-12 drop-shadow-md">
                              {banner.subtitle}
                            </p>
                          </>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <Link
                            href="#packages"
                            className={banner.showButtonOnly
                              ? "px-10 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold tracking-[0.3em] text-[10px] uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:scale-110 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-700 group overflow-hidden relative shadow-2xl"
                              : "px-8 py-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[#B38F24] text-white font-bold tracking-widest text-sm shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_45px_rgba(212,175,55,0.7)] transition-all duration-300"
                            }
                          >
                            <span className="relative z-10">Explore More</span>
                            {banner.showButtonOnly && (
                              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                            )}
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Introduction / About Section */}
      <section className="py-27 px-9 max-w-7xl mx-auto bg-transparent relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-3 block">Welcome to FLY International</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] tracking-tight serif-heading mb-6 leading-snug">
              Your Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A] italic">Sacred & Global Journeys</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8"></div>
            <p className="text-[1.05rem] text-[#9CA3AF] leading-relaxed mb-6">
              At FLY International Tours & Travels, we are dedicated to guiding you through every step of your sacred and global journey. From carefully curated <strong className="font-bold text-[#D4AF37]">Hajj</strong> and <strong className="font-bold text-[#D4AF37]">Umrah packages</strong> to reliable <strong className="font-bold text-[#D4AF37]">Visa Stamping</strong>, visiting visa assistance, and certificate attestation services, we ensure a smooth and stress-free experience.
            </p>
            <p className="text-[1.05rem] text-[#9CA3AF] leading-relaxed mb-8">
              With a commitment to trust, comfort, and personalized support, we help you travel with confidence—whether for spiritual fulfillment or <strong className="font-bold text-[#D4AF37]">Study Abroad</strong> opportunities.
            </p>

            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0B3C5D] to-[#1a4f76] text-white font-bold tracking-widest uppercase text-xs shadow-[0_8px_25px_rgba(11,60,93,0.3)] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.4)] hover:from-[#D4AF37] hover:to-[#e5c158] transition-all duration-500 group"
            >
              Know More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1.5 group-hover:scale-110 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right Image Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[450px] w-full rounded-[32px] overflow-hidden group border border-[var(--border)] shadow-[var(--shadow)] bg-[var(--surface)]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A0F1C]/20 z-10 group-hover:bg-transparent transition-all duration-700"></div>
            <img
              src="/global-travel-connections.png"
              alt="Global Journey Flight"
              className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
            />
            {/* Glowing Abstract Corner */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37] rounded-full blur-[80px] opacity-40 z-20"></div>
          </motion.div>
        </div>
      </section>



      {/* Global Reach & Connectivity Section (The "Paid Empty Section") */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-transparent relative z-10">
        <div className="glass-panel rounded-[40px] overflow-hidden border border-[var(--border)] relative flex flex-col items-center">
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <img
            src="/global-travel-connections.png"
            alt="Global Travel Connections"
            className="w-full h-auto max-h-[600px] object-cover opacity-80"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Global Network</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 serif-heading leading-tight italic">
                Connecting You to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A]">Every Corner</span> of the Globe
              </h2>
              <p className="text-lg text-gray-200/80 font-medium mb-10 leading-relaxed">
                Whether it's the sacred lands of Saudi Arabia, the bustling cities of the Gulf, or your dreams of studying abroad, we bridge the gap with seamless visa services and global flight connections.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {["Visa Assistance", "Ticket Booking", "Group Tours", "Corporate Travel", "Study Abroad"].map((service, idx) => (
                  <span key={idx} className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/20 rounded-full">{service}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Start Your Journey CTA */}
      <section className="w-full relative py-28 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[var(--surface)] z-0"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay"></div>

        {/* Animated Glow Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--text)] mb-6 serif-heading drop-shadow-xl">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A] italic">Journey Today</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text)]/80 font-medium mb-12 max-w-2xl mx-auto">
              Our experts are ready to guide you. Take the first step towards a spiritually uplifting and effortlessly comfortable pilgrimage.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-4 rounded-full gold-glow text-white font-bold tracking-widest uppercase text-sm shadow-[0_10px_30px_rgba(212,175,55,0.5)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Contact Us</span>
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-bold tracking-widest uppercase text-sm backdrop-blur-md hover:bg-[var(--primary)] hover:text-white hover:-translate-y-1 transition-all duration-300">
                Explore Our Services
              </Link>
              <Link href="/packages" className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-[#0EA5E9] text-[#0EA5E9] font-bold tracking-widest uppercase text-sm backdrop-blur-md hover:bg-[#0EA5E9] hover:text-white hover:-translate-y-1 transition-all duration-300">
                Explore Our Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
