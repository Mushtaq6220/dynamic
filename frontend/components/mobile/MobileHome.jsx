"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheckIcon,
  GlobeAmericasIcon,
  HeartIcon,
  AcademicCapIcon,
  TicketIcon,
  DocumentTextIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Keyboard } from "swiper/modules";
import { getServicePage } from "../../data/servicePages";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function PilgrimageHome({ packages = [], flights = [] }) {
  const [activeTab, setActiveTab] = useState("Deluxe");
  const tabs = ["Super Saver", "Affordable", "Deluxe"];
  const heroBanners = [
    {
      src: "/banner.png",
      showText: false,
      showButtonOnly: true,
      badge: "FLY INTERNATIONAL tours & Travels",
      ctaHref: "/packages",
      imageClassName: "object-contain scale-[0.84] object-center md:scale-95",
      overlayClassName: "bg-black/5",
    },
    {
      src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=2000",
      showText: true,
      title: "Where Faith Meets",
      highlight: "Journey",
      subtitle: "Experience Hajj & Umrah with peace and care.",
      ctaHref: "/packages",
    },
    {
      src: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=2000",
      showText: true,
      title: "From Your City to the",
      highlight: "Holy Land",
      subtitle: "We take care of everything for you.",
      ctaHref: "/packages",
    },
    {
      src: "https://res.cloudinary.com/greenappletravel-ae/image/upload/v1766559767/greenapple/tours/main/umrah-package-makkah-madinah_1766559766.webp",
      showText: true,
      title: "Your Spiritual Journey,",
      highlight: "Our Responsibility",
      subtitle: "Excellence in every step.",
      ctaHref: "/services",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwRJnoQesLtWzT1aPpJpQAdqk0MjMekCyxQ&s",
      showText: true,
      title: "Seamless & Secure",
      highlight: "Pilgrimage",
      subtitle: "Premium packages with comfort and affordability.",
      ctaHref: "/contact",
    },
  ];
  const serviceHighlights = [
    {
      ...getServicePage("air-ticketing"),
      icon: TicketIcon,
      accent: "from-[#FFD76A]/50 via-[#FFE8A3]/20 to-transparent dark:from-[#D4AF37]/30 dark:via-[#D4AF37]/10 dark:to-transparent",
    },
    {
      ...getServicePage("visit-visa"),
      icon: GlobeAmericasIcon,
      accent: "from-[#73C7FF]/45 via-[#D6F0FF]/20 to-transparent dark:from-[#3BA7FF]/30 dark:via-[#3BA7FF]/10 dark:to-transparent",
    },
    {
      ...getServicePage("certificate-attestations"),
      icon: DocumentTextIcon,
      accent: "from-[#FFB454]/45 via-[#FFE0B2]/20 to-transparent dark:from-[#F59E0B]/25 dark:via-[#F59E0B]/10 dark:to-transparent",
    },
    {
      ...getServicePage("study-abroad"),
      icon: AcademicCapIcon,
      accent: "from-[#A78BFA]/35 via-[#E9DDFF]/18 to-transparent dark:from-[#8B5CF6]/20 dark:via-[#8B5CF6]/10 dark:to-transparent",
    },
  ];

  const filteredPackages = packages.filter((p) => {
    const category = p.category || p.plan || "Deluxe";
    return category.toLowerCase().includes(activeTab.toLowerCase());
  });

  const displayPackages = filteredPackages.length > 0 ? filteredPackages.slice(0, 3) : packages.slice(0, 3);

  return (
    <main className="relative bg-transparent">
      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[350px] overflow-hidden">
        {/* Swiper Background Slider */}
        <div className="absolute inset-0 z-0 h-full w-full">
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
            {heroBanners.map((banner, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full overflow-hidden">
                  <div className={`absolute inset-0 z-10 pointer-events-none ${banner.overlayClassName || (banner.showText ? "bg-black/50" : "bg-black/10")}`}></div>
                  <img
                    src={banner.src}
                    alt={`Banner ${i + 1}`}
                    className={`h-full w-full bg-black ${banner.imageClassName || "object-cover object-center"}`}
                  />

                  {(banner.showText || banner.showButtonOnly) && (
                    <div className={`absolute inset-0 z-20 mx-auto flex h-full max-w-7xl flex-col items-center px-4 pointer-events-none sm:px-6 ${banner.showText ? "justify-center py-16 text-center md:py-20" : "justify-between pt-20 pb-24 text-center md:pt-20 md:pb-32"}`}>
                      {/* Top Badge for first banner upside placement */}
                      {banner.showButtonOnly && banner.badge && (
                        <motion.div
                          initial={{ opacity: 0, y: -40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="pointer-events-auto"
                        >
                          <span className="inline-block rounded-full border border-white/10 bg-black/30 px-5 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#D4AF37] shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:px-8 sm:text-[11px] sm:tracking-[0.4em]">
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
                            <span className="mb-6 inline-block rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D4AF37] shadow-2xl backdrop-blur-xl sm:px-6 sm:tracking-[0.3em]">
                              {banner.badge || "Fly International Tours & Travels"}
                            </span>
                            <h1 className="serif-heading mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                              {banner.title} <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3D67A] italic">{banner.highlight}</span>
                            </h1>
                            <p className="mx-auto mb-10 max-w-2xl text-sm font-medium text-gray-200 drop-shadow-md sm:text-base md:text-lg">
                              {banner.subtitle}
                            </p>
                          </>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <Link
                            href={banner.ctaHref || "/packages"}
                            className={banner.showButtonOnly
                              ? "relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-2xl transition-all duration-700 hover:scale-105 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] backdrop-blur-xl sm:px-10 sm:tracking-[0.3em] group"
                              : "rounded-full bg-gradient-to-r from-[var(--primary)] to-[#B38F24] px-8 py-3 text-sm font-bold tracking-widest text-white shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_45px_rgba(212,175,55,0.7)]"
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
      <section className="relative z-10 mx-auto max-w-7xl bg-transparent px-6 py-20 md:px-8 md:py-24">
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
            className="relative h-[320px] w-full overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] group sm:h-[380px] lg:h-[450px]"
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



      {/* Global Reach & Connectivity Section - REDESIGNED */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-transparent relative z-10">
        <div className="relative rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 bg-[var(--surface)] z-0 mix-blend-normal opacity-95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--primary)]/10 via-[var(--surface)]/5 to-transparent z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] z-0 opacity-40"></div>
          <div className="absolute top-0 right-0 w-full md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-b from-[var(--primary)]/20 to-transparent blur-3xl z-0 pointer-events-none"></div>

          <div className="relative z-20">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--surface-strong)] text-[var(--primary)] font-bold tracking-widest uppercase text-xs mb-4 shadow-sm border border-[var(--border)]">
                Global Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--heading)] tracking-tight serif-heading mb-4">
                Beyond Travel: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] italic">Complete Solutions</span>
              </h2>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Discover our comprehensive suite of global services, meticulously designed to support your international aspirations with precision and care.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
            >
              {serviceHighlights.map((service, idx) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.slug || idx}
                    href={`/services/${service.slug}`}
                    className="group relative h-full flex flex-col rounded-[32px] bg-[var(--bg)] border border-[var(--border)] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[var(--shadow)]"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[var(--surface-strong)] to-transparent z-0"></div>
                    
                    {/* Animated Border Glow */}
                    <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 z-0"></div>
                    <div className="absolute inset-[1px] rounded-[31px] bg-[var(--bg)] z-0 group-hover:bg-[var(--surface)] transition-colors duration-500"></div>
                    <div className={`absolute inset-0 bg-gradient-to-b ${service.accent} opacity-20 dark:opacity-40 z-0 pointer-events-none rounded-[31px]`}></div>

                    <div className="relative z-10 p-8 flex flex-col flex-1">
                      {/* Icon Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="relative">
                          {/* Inner Icon Background */}
                          <div className="absolute inset-0 bg-[var(--surface-strong)] rounded-[20px] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-[var(--surface)] border border-[var(--border)] shadow-sm transform group-hover:scale-110 transition-transform duration-500 z-10">
                            <Icon className="h-8 w-8 text-[var(--primary)]" />
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500 shadow-sm">
                          <ArrowUpRightIcon className="h-5 w-5 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
                        </div>
                      </div>

                      {/* Content */}
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] mb-3 block">
                        {service.eyebrow || "Services"}
                      </span>
                      <h3 className="mb-4 text-2xl font-extrabold text-[var(--heading)] leading-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)] line-clamp-2">
                        {service.highlights?.[0] || service.summary}
                      </p>

                      <div className="mt-auto pt-6 border-t border-[var(--border)] space-y-3">
                        {service.highlights?.slice(1, 3).map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                            </div>
                            <span className="text-[13px] text-[var(--muted)] leading-tight flex-1">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Your Journey CTA */}
      <section className="w-full relative py-28 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[var(--surface)] z-0"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay"></div>

        {/* Animated Glow Elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#D4AF37] rounded-full blur-[100px] md:blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#D4AF37] rounded-full blur-[100px] md:blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

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
