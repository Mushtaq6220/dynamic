"use client";

import { motion } from "framer-motion";
import { 
  RocketLaunchIcon, 
  MapIcon, 
  TicketIcon, 
  ArrowPathIcon 
} from "@heroicons/react/24/outline";

export default function TrainBookingBanner() {
  return (
    <section className="relative rounded-[32px] overflow-hidden mb-12 py-16 px-8 border border-[var(--border)] group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1474487059220-46a5a3a03291?auto=format&fit=crop&q=80&w=1600" 
          alt="" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/90 via-[var(--primary)]/40 to-transparent"></div>
        {/* Animated Orbs for Dark Mode */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)]/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg bg-[var(--secondary)]/20 backdrop-blur-sm border border-[var(--secondary)]/30">
              <TicketIcon className="w-5 h-5 text-[var(--secondary)]" />
            </div>
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Partnered with IRCTC</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
            Fast Track Your Journey{"\n"}
            <span className="text-[var(--secondary)]">Reliable Train Bookings</span>
          </h2>
          
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
            Say goodbye to waitlist stresses. We specialize in securing confirmed berths for families, 
            groups, and solo pilgrims across all Indian Railway zones.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel !bg-white/10 !border-white/10 p-4 rounded-2xl flex items-center gap-3">
              <RocketLaunchIcon className="w-6 h-6 text-[var(--secondary)]" />
              <span className="text-white font-medium text-sm">Tatkal Specialist</span>
            </div>
            <div className="glass-panel !bg-white/10 !border-white/10 p-4 rounded-2xl flex items-center gap-3">
              <ArrowPathIcon className="w-6 h-6 text-[var(--secondary)]" />
              <span className="text-white font-medium text-sm">Real-time Tracking</span>
            </div>
          </div>
        </div>

        {/* Dynamic Status Display (Mock UI) */}
        <div className="hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel !bg-white/5 !backdrop-blur-xl !border-white/10 p-8 rounded-[32px] shadow-2xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Train Status</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold border border-green-500/30 animate-pulse">LIVE</span>
            </div>

            <div className="space-y-8">
               {/* Route Path */}
               <div className="relative">
                 <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10"></div>
                 <div className="space-y-10">
                   <div className="flex items-start gap-6 relative">
                     <div className="w-8 h-8 rounded-full bg-[var(--secondary)] border-4 border-white/20 flex items-center justify-center z-10">
                       <MapIcon className="w-4 h-4 text-white" />
                     </div>
                     <div>
                       <span className="text-white font-bold block">New Delhi (NDLS)</span>
                       <span className="text-white/40 text-xs">Departure: 06:10 AM</span>
                     </div>
                   </div>
                   <div className="flex items-start gap-6 relative">
                     <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white/20 flex items-center justify-center z-10 animate-bounce">
                       <div className="w-2 h-2 rounded-full bg-white"></div>
                     </div>
                     <div>
                       <span className="text-white font-bold block">Enroute to Hyderabad</span>
                       <span className="text-[var(--secondary)] text-xs font-bold">Speed: 130 km/h</span>
                     </div>
                   </div>
                   <div className="flex items-start gap-6 relative">
                     <div className="w-8 h-8 rounded-full bg-white/10 border-4 border-white/5 flex items-center justify-center z-10">
                       <MapIcon className="w-4 h-4 text-white/40" />
                     </div>
                     <div>
                       <span className="text-white/40 font-bold block">Hyd. Deccan (HYB)</span>
                       <span className="text-white/20 text-xs">Expected Arrival: 08:45 PM</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
