"use client";

import { motion } from "framer-motion";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import VisaStampingBanner from "./VisaStampingBanner";
import TrainBookingBanner from "./TrainBookingBanner";
import StudyAbroadUI from "./StudyAbroadUI";

export default function ServicePageClient({ service }) {
    if (service.slug === "study-abroad") {
      return (
        <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <StudyAbroadUI service={service} />
          </div>
        </main>
      );
    }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Modern Quote-Centric Hero Section */}
        <section className="group relative mb-12 flex min-h-[320px] items-center overflow-hidden rounded-[30px] border border-[var(--border)] sm:mb-16 sm:min-h-[400px] sm:rounded-[40px]">
          {/* Background with advanced overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.slug === "air-ticketing" ? "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=1600" : "https://images.unsplash.com/photo-1532105956626-ce5e407b4975?auto=format&fit=crop&q=80&w=1600"} 
              alt=""
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/95 via-[#0B3C5D]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="relative z-10 w-full p-6 sm:p-8 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[var(--secondary)]"></div>
                <span className="text-[var(--secondary)] text-sm font-bold uppercase tracking-[0.3em]">{service.eyebrow}</span>
              </div>
              
              <h1 className="mb-8 max-w-3xl font-serif text-xl font-light italic leading-snug text-white opacity-90 sm:mb-12 sm:text-2xl md:text-3xl">
                "{service.slug === "air-ticketing" 
                  ? "To travel is to live, and to fly is to see the world from a perspective only angels know." 
                  : service.slug === "train-ticket-booking"
                  ? "Life is a journey, not a destination. Let the rhythm of the rails guide your soul home."
                  : service.slug === "visa-stamping"
                  ? "Every stamp in your passport is a new chapter in your story. Let us help you write yours."
                  : "The world is a book, and those who do not travel read only a page."}"
              </h1>

              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                  {service.title}
                </h2>
                <div className="h-10 w-px bg-white/20 hidden md:block mb-2"></div>
                <p className="text-white/70 text-base md:text-lg max-w-md font-medium mb-1">
                  {service.summary.split('.')[0]}.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {service.slug === "visa-stamping" ? <div className="mb-12"><VisaStampingBanner /></div> : null}
        {service.slug === "train-ticket-booking" ? <div className="mb-12"><TrainBookingBanner /></div> : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Main Coverage */}
          <div className="glass-panel rounded-[28px] p-6 sm:rounded-[32px] sm:p-8 lg:col-span-2 lg:p-10">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                <DocumentCheckIcon className="w-6 h-6 text-[var(--secondary)]" />
              </div>
              What this service covers
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {service.highlights.map((point) => (
                <div key={point} className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--surface-strong)] border border-transparent hover:border-[var(--secondary)]/20 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[var(--secondary)] mt-1.5 flex-shrink-0"></div>
                  <span className="text-[var(--text)] font-medium leading-normal">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Panel */}
          <div className="glass-panel flex flex-col justify-between rounded-[28px] p-6 sm:rounded-[32px] sm:p-8 lg:p-10">
            <div>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 tracking-tight">Need help?</h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                For bookings and specific service enquiries, our dedicated support desk is available to assist you with every step of the process.
              </p>
            </div>
            
            <a 
              href={`https://wa.me/916281144625?text=${encodeURIComponent("Hello, I need assistance with " + service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glow w-full py-4 rounded-2xl text-center font-bold uppercase tracking-widest text-sm"
            >
              Get Assistance
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
