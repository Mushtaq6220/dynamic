"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MapPinIcon,
  StarIcon,
  ArrowRightIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import "../../styles/nearby-hotels.css";

const hotelData = {
  Makkah: [
    {
      name: "Makkah Clock Royal Tower",
      distance: "300m",
      location: "Abraj Al Bait Complex",
      rating: 5,
      image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepPZGKRgSIw7FXcUZnsH0xfqnE4Ioh-PME963vizaM5SsEUreK_kulG5pWSdElS1n3R_SIY6RXxxJ8CkETyx8z2nHzuaUZhSGqsabRzMb8764-efAMlYCHE4Do6mPrX0OqULMaK=w243-h174-n-k-no-nu",
      tag: "Best View"
    },
    {
      name: "Pullman ZamZam Makkah",
      distance: "400m",
      location: "Kudai Gate Area",
      rating: 5,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      tag: "Family Favorite"
    },
    {
      name: "Conrad Makkah",
      distance: "550m",
      location: "Jabal Omar Development",
      rating: 5,
      image: "https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Conrad/M/MAKCICI/MAKCI_Lobby.jpg",
      tag: "Modern Luxury"
    },
    {
      name: "Hilton Makkah Towers",
      distance: "600m",
      location: "Ibrahim Al Khalil St",
      rating: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntKcwXUeyurC8xFxZOcUydU2yqrdhjUlCZQ&s",
      tag: "Direct Access"
    },
    {
      name: "Anjum Makkah Hotel",
      distance: "400m",
      location: "Umm Al Qura Street",
      rating: 5,
      image: "https://images.unsplash.com/photo-1571011234479-052e00829871?q=80&w=2070&auto=format&fit=crop",
      tag: "Spacious Stays"
    },
    {
      name: "Swissôtel Makkah",
      distance: "050m",
      location: "Clock Tower Plaza",
      rating: 5,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      tag: "Swiss Quality"
    }
  ],
  Madinah: [
    {
      name: "The Oberoi Madinah",
      distance: "500m",
      location: "Abizar Road",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551882547-ff43c63e8c24?q=80&w=2070&auto=format&fit=crop",
      tag: "Premium Opulence"
    },
    {
      name: "Anwar Al Madinah Mövenpick",
      distance: "300m",
      location: "Central Northern Area",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      tag: "Massive Capacity"
    },
    {
      name: "Dar Al Iman InterContinental",
      distance: "450m",
      location: "King Fahd Gate",
      rating: 5,
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop",
      tag: "Immediate Proximity"
    },
    {
      name: "Shaza Al Madina",
      distance: "400m",
      location: "Central Area",
      rating: 5,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      tag: "Eastern Charm"
    },
    {
      name: "Pullman Zamzam Madina",
      distance: "650m",
      location: "Amr Bin Al Aas St",
      rating: 5,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2066&auto=format&fit=crop",
      tag: "Comfort First"
    },
    {
      name: "Dallah Taibah Hotel",
      distance: "800m",
      location: "Northern Area",
      rating: 4,
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
      tag: "Trusted Name"
    }
  ]
};

export default function NearbyHotelsPage() {
  const [activeCity, setActiveCity] = useState("Makkah");

  return (
    <main className="nh-wrapper pt-32 pb-24">
      {/* Hero Header */}
      <section className="nh-hero">
        <Image
          src={activeCity === "Makkah"
            ? "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
            : "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
          }
          alt="Sacred Destination"
          fill
          className="nh-hero-img"
          priority
        />
        <div className="nh-hero-overlay"></div>
        <div className="nh-hero-content">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Premium Accommodations
          </motion.p>
          <motion.h1
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white px-2 leading-tight"
          >
            Stay Near <span className="text-[#D4AF37] italic font-light">{activeCity === "Makkah" ? "Al-Haram" : "An-Nabawi"}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8 mb-6"
          ></motion.div>
          <p className="text-white/80 max-w-xl mx-auto text-lg hidden md:block leading-relaxed">
            Experience the ultimate comfort with rooms just steps away from the Holy Mosques.
            We partner with the finest hotels to ensure your pilgrimage is peaceful and spiritually focused.
          </p>
        </div>
      </section>

      {/* Tabs / Switcher */}
      <div className="nh-tabs px-6">
        <button
          onClick={() => setActiveCity("Makkah")}
          className={`nh-tab-btn ${activeCity === "Makkah" ? "active" : ""}`}
        >
          Makkah Mukarramah
        </button>
        <button
          onClick={() => setActiveCity("Madinah")}
          className={`nh-tab-btn ${activeCity === "Madinah" ? "active" : ""}`}
        >
          Madinah Munawwarah
        </button>
      </div>

      {/* Hotel Grid Section */}
      <section className="px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="nh-grid"
          >
            {(hotelData[activeCity] || []).map((hotel, idx) => (
              <motion.article
                key={hotel.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="nh-card group"
              >
                <div className="nh-card-media">
                  <span className="nh-card-badge">{hotel.tag}</span>
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="nh-card-img"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                      View Details <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="nh-card-content">
                  <h3 className="nh-card-title">{hotel.name}</h3>

                  <div className="nh-card-info">
                    <MapPinIcon className="w-4 h-4 text-[#D4AF37]" />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-[#D4AF37]/10 rounded-lg">
                        <BuildingOfficeIcon className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <span className="text-sm font-bold text-[#0B3C5D] dark:text-[#f8fafc]">Distance</span>
                    </div>
                    <span className="nh-dist-tag">{hotel.distance}</span>
                  </div>

                  <div className="nh-card-footer">
                    <div className="nh-rating">
                      {[...Array(5)].map((_, i) => (
                        i < hotel.rating ? (
                          <StarIconSolid key={i} className="w-4 h-4" />
                        ) : (
                          <StarIcon key={i} className="w-4 h-4" />
                        )
                      ))}
                    </div>
                    <div className="nh-cta">
                      Contact for Booking
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Booking Callout */}
      <section className="max-w-5xl mx-auto px-4 mt-32 mb-12">
        <div className="relative p-12 md:p-16 rounded-[48px] bg-[#0B3C5D] text-white overflow-hidden shadow-[0_40px_100px_rgba(11,60,93,0.3)] border border-white/10 group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-8 border border-white/20"
            >
              <BuildingOfficeIcon className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight max-w-2xl leading-tight">
              Prefer a <span className="text-[#D4AF37] italic underline decoration-white/20 decoration-2 underline-offset-8">Specific Hotel?</span>
            </h2>

            <p className="text-white/70 mb-12 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
              Our luxury packages allow for full customization. If you have a preferred international brand
              or specific tower in mind, our dedicated team will secure the reservations as part of your tailored itinerary.
            </p>

            <a
              href="https://wa.me/919951335542?text=Assalamu%20Alaikum,%20I%20am%20interested%20in%20customizing%20my%20stay%20and%20have%20a%20specific%20hotel%20preference%20in%20mind.%20Could%20you%20please%20provide%20a%20custom%20quote?"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-[#D4AF37] hover:bg-[#E5C158] text-[#0B3C5D] rounded-full font-black text-lg transition-all transform hover:scale-110 active:scale-95 shadow-[0_20px_40px_rgba(212,175,55,0.3)] flex items-center gap-3"
            >
              Request Custom Quote
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

