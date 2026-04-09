"use client";

import { useMemo, useState, useEffect, use } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { getPackageById } from "../../../data/packageCatalog";
import { 
  BuildingOfficeIcon, PaperAirplaneIcon, DocumentCheckIcon, 
  MapPinIcon, CalendarDaysIcon, CheckCircleIcon 
} from "@heroicons/react/24/outline";
import "../../../styles/premium-packages.css";

// Note: In an actual app, we'd fetch this from the API or import catalog.
// We are mocking a premium package details payload for the demonstration.
const mockPackageData = {
  name: "Premium Deluxe Umrah",
  category: "Deluxe",
  price: 185000,
  duration: "14 Days",
  departureDate: "Upcoming specific dates",
  hotel: "5-Star Hotels in Makkah & Madinah",
  route: "Hyd/Mum/Del - Jeddah - Makkah - Madinah",
  description: "Experience peace and devotion with our premium, carefully curated pilgrimage packages. Designed for maximum comfort, guided spiritual focus, and effortless transfers.",
  images: [
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1565552645632-d725f8bfcbee?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=1200"
  ],
  features: ["Premium 5-Star Hotel", "Return Flights", "Umrah Visa", "Ziyarat with Guide", "Luxury Transport", "Buffet Meals"],
  itinerary: [
    { day: "Day 1", title: "Arrival in Jeddah", desc: "Arrive at King Abdulaziz International Airport. Transfer to hotel in Makkah." },
    { day: "Day 2", title: "Perform Umrah", desc: "Guided Umrah performance led by our experienced scholars." },
    { day: "Day 3-5", title: "Makkah Stay & Ziyarat", desc: "Time for personal devotion. Local ziyarat visits to historical sites." },
    { day: "Day 6", title: "Transfer to Madinah", desc: "Travel via Haraiman High Speed Train to Madinah." },
    { day: "Day 7-13", title: "Madinah Stay & Ziyarat", desc: "Pray in Masjid an-Nabawi. Visits to Mount Uhud, Quba Mosque." },
    { day: "Day 14", title: "Departure", desc: "Transfer to Medinah Airport for the return journey home." }
  ]
};

// Animated Price Counter Component
function AnimatedPrice({ targetPrice }) {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    let startTimestamp = null;
    const duration = 3000; // Slower duration: 3 seconds
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Use easeOutQuad for smoother landing
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      
      setCurrent(Math.floor(easeProgress * targetPrice));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [targetPrice]);

  return <span>₹{current.toLocaleString('en-IN')}</span>;
}

export default function PackageDetailPage({ params }) {
  const resolvedParams = use(params);
  const item = useMemo(() => getPackageById(resolvedParams.id), [resolvedParams.id]);

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center">Package not found</div>;
  }

  // Parse price string like "Rs. 1,19,999" to number
  const numericPrice = parseInt(item.price.replace(/[^\d]/g, ""), 10) || 0;

  return (
    <main className="min-h-screen bg-[var(--pp-bg-light)] pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm font-medium text-[var(--pp-text-muted-light)] flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--pp-gold)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-[var(--pp-gold)] transition-colors">Packages</Link>
          <span>/</span>
          <span className="text-[var(--pp-text-main-light)] truncate">{item.name}</span>
        </div>

        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-start relative">
          
          {/* LEFT COLUMN: Media & Maps */}
          <div className="w-full lg:w-[55%] flex flex-col gap-8 lg:sticky lg:top-24">
            {/* Swiper Slider */}
            <div className="rounded-[24px] overflow-hidden shadow-sm border border-[var(--pp-card-border-light)] relative bg-white h-[450px]">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full package-detail-swiper"
              >
                {[item.image, "https://images.unsplash.com/photo-1565552645632-d725f8bfcbee?auto=format&fit=crop&q=80&w=1200", "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&q=80&w=1200"].map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-black/10 z-10"></div>
                      <img src={src} alt={`Package slide ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-white/90 backdrop-blur-md border border-gray-100 text-[#1a1a1a] px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Map Route Visualization */}
            <div className={`pp-detail-glass theme-${item.category} p-6 rounded-[24px] border-2 border-[var(--pp-gold)]/20 shadow-xl overflow-hidden`}>
              <h3 className="text-lg font-bold text-[var(--pp-text-main-light)] mb-8 flex items-center gap-2">
                <div className="p-2 bg-[var(--pp-gold)]/10 rounded-lg">
                  <MapPinIcon className="w-5 h-5 text-[var(--pp-gold)]" />
                </div>
                Journey Timeline
              </h3>
              
              <div className="relative w-full py-12 px-6 sm:px-12 bg-gray-50/30 rounded-2xl border border-gray-100/50">
                {/* Background Line */}
                <div className="absolute left-6 right-6 sm:left-12 sm:right-12 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }} 
                     whileInView={{ width: "100%" }} 
                     transition={{ duration: 2.5, ease: "easeInOut" }}
                     className="h-full bg-gradient-to-r from-[#0B3C5D] via-[var(--pp-gold)] to-[#0B3C5D]"
                   />
                </div>

                {/* Milestones */}
                <div className="relative flex items-center justify-between h-full">
                  {item.route.split("-").map((city, idx) => {
                    const cityName = city.trim();
                    const isEven = idx % 2 === 0;
                    
                    return (
                      <div key={idx} className="relative flex flex-col items-center">
                        {/* Dot */}
                        <div className="relative group">
                          <div className="w-5 h-5 rounded-full bg-white border-2 border-[var(--pp-gold)] shadow-[0_0_10px_rgba(184,145,45,0.3)] z-10 transition-transform duration-300 group-hover:scale-125"></div>
                          <div className="absolute inset-0 bg-[var(--pp-gold)] rounded-full blur-[4px] opacity-0 group-hover:opacity-60 transition-opacity"></div>
                        </div>

                        {/* Label - Staggered Top/Bottom */}
                        <span className={`absolute whitespace-nowrap text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#0B3C5D] 
                          ${isEven ? "-bottom-10" : "-top-10"}
                        `}>
                          {cityName}
                        </span>

                        {/* Connector line for labels */}
                        <div className={`absolute w-px h-6 bg-gradient-to-b ${isEven ? "from-[var(--pp-gold)] to-transparent top-5" : "from-transparent to-[var(--pp-gold)] -top-6"} opacity-40`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Details & Itinerary */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6 scroll-smooth">
            <div className={`pp-detail-glass gradient-border theme-${item.category}`}>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--pp-text-main-light)] tracking-tight mb-2 leading-tight">
                {item.name}
              </h1>
              
              <div className="flex items-center gap-2 text-sm text-[var(--pp-text-muted-light)] font-medium mb-6">
                <CalendarDaysIcon className="w-4 h-4 text-[var(--pp-gold)]" />
                {item.duration} • Scheduled Departures
              </div>

              <p className="text-[var(--pp-text-muted-light)] text-[0.95rem] leading-relaxed mb-8 bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
                {item.description}
              </p>

              {/* Price & Sticky CTA */}
              <div className={`flex items-center justify-between p-6 rounded-[24px] shadow-sm relative overflow-hidden group pp-price-box theme-${item.category}`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest block mb-1">Total Package Cost</span>
                  <div className="text-3xl lg:text-4xl font-bold text-white tabular-nums tracking-tight">
                    <AnimatedPrice targetPrice={numericPrice} />
                  </div>
                </div>
                <a 
                  href={`https://wa.me/916281144625?text=Hello,%20I%20would%20like%20to%20get%20more%20information%20about%20the%20${encodeURIComponent(item.name)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pp-card-btn !w-auto !px-8 !py-3 !text-sm z-10 theme-${item.category}`}
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Included Services */}
            <div className={`pp-detail-glass theme-${item.category} p-8 rounded-[32px]`}>
              <h3 className="text-xl font-bold text-[var(--pp-text-main-light)] mb-6 tracking-tight">Included Services</h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[var(--pp-gold)] flex-shrink-0" />
                    <span className="text-[var(--pp-text-main-light)] font-medium text-sm leading-tight pt-0.5">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* About the Journey */}
            <div className={`pp-detail-glass theme-${item.category} p-8 rounded-[32px]`}>
              <h3 className="text-xl font-bold text-[var(--pp-text-main-light)] mb-4 tracking-tight">Spirit & Quality</h3>
              <div className="space-y-4">
                {item.details?.map((detail, idx) => (
                  <p key={idx} className="text-sm text-[var(--pp-text-muted-light)] leading-relaxed flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--pp-gold)] mt-2 flex-shrink-0"></span>
                    {detail}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

