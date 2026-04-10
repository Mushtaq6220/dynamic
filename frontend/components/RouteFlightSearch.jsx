"use client";

import { flightSchedules } from "../data/flightSchedule";
import { 
  PaperAirplaneIcon, 
  MapPinIcon, 
  ClockIcon, 
  CalendarIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export default function RouteFlightSearch() {
  const handleInquiry = (flight) => {
    const phoneNumber = "919951335542";
    const message = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

I am interested in inquiring about seat availability for the following flight:

✈️ *Airline:* ${flight.airline}
🔢 *Flight No:* ${flight.flightNumber}
📍 *Route:* ${flight.from} to ${flight.to}
📅 *Date:* ${flight.date}
⏰ *Time:* ${flight.time}
💰 *Price:* ${flight.price}

Please provide more details regarding availability and booking. JazakAllah!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#061A2B] transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-400/20 rounded-full mb-6 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <GlobeAltIcon className="w-4 h-4" /> Live Operations Board
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] dark:from-[#D4AF37] to-[#DAA520] dark:to-[#E5C158]">Flight Schedules</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-gray-400 font-bold text-lg leading-relaxed">
            Direct departures managed and confirmed by FLY International operations for the Hajj & Umrah season 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {flightSchedules.map((flight, idx) => (
            <div 
              key={flight.id} 
              className="group relative bg-white dark:bg-[#0B2439] border border-slate-200 dark:border-white/5 rounded-[48px] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-10 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-slate-50 dark:bg-[#061A2B] rounded-3xl flex items-center justify-center border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform shadow-sm dark:shadow-2xl">
                    <PaperAirplaneIcon className="w-10 h-10 text-blue-600 dark:text-[#D4AF37] rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight leading-none mb-1">{flight.airline}</h3>
                    <p className="text-[10px] font-black text-slate-400 dark:text-gray-400 uppercase tracking-[0.3em]">{flight.flightNumber}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                   <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 dark:from-white to-slate-500 dark:to-gray-400 tracking-tighter mb-1">
                      {flight.price}
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-500 text-[9px] font-black uppercase tracking-widest">
                      <ShieldCheckIcon className="w-3.5 h-3.5" /> {flight.status}
                   </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">Departing From</p>
                  <h4 className="text-2xl font-black text-slate-800 dark:text-white">{flight.from.split('(')[1].replace(')', '')}</h4>
                  <p className="text-xs font-bold text-slate-500 dark:text-gray-500 mt-1">{flight.from.split('(')[0]}</p>
                </div>

                <div className="flex flex-col items-center flex-1 max-w-[200px]">
                   <div className="relative w-full h-[1px] bg-slate-200 dark:bg-white/10">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                         <div className="w-10 h-10 bg-white dark:bg-[#0B2439] border border-blue-500/20 rounded-full flex items-center justify-center shadow-md dark:shadow-2xl mb-1">
                            <PaperAirplaneIcon className="w-5 h-5 text-blue-500 rotate-90" />
                         </div>
                         <p className="text-[8px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] whitespace-nowrap bg-white dark:bg-[#0B2439] px-2">Non-Stop</p>
                      </div>
                   </div>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-[10px] font-black text-amber-600 dark:text-[#D4AF37] uppercase tracking-[0.2em] mb-2">Arriving At</p>
                  <h4 className="text-2xl font-black text-slate-800 dark:text-white">{flight.to.split('(')[1].replace(')', '')}</h4>
                  <p className="text-xs font-bold text-slate-500 dark:text-gray-500 mt-1">{flight.to.split('(')[0]}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-[#061A2B] px-4 md:px-8 py-5 rounded-[24px] border border-slate-100 dark:border-white/5 flex flex-col items-center text-center">
                  <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                  <p className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-1">Departure Date</p>
                  <p className="text-sm font-black text-slate-800 dark:text-white whitespace-nowrap">{flight.date}</p>
                </div>
                <div className="bg-slate-50 dark:bg-[#061A2B] px-4 md:px-8 py-5 rounded-[24px] border border-slate-100 dark:border-white/5 flex flex-col items-center text-center">
                  <ClockIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                  <p className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-widest leading-none mb-1">Departure Time</p>
                  <p className="text-sm font-black text-slate-800 dark:text-white whitespace-nowrap">{flight.time}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 text-center">
                 <button 
                  onClick={() => handleInquiry(flight)}
                  className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-3xl hover:bg-blue-600 dark:hover:bg-[#D4AF37] hover:text-white transition-all text-xs uppercase tracking-[0.3em] shadow-xl hover:shadow-2xl active:scale-95"
                >
                    Inquire About Seat Availability
                 </button>
              </div>
            </div>
          ))}
        </div>

        {flightSchedules.length === 0 && (
          <div className="py-40 text-center bg-[#0B2439] rounded-[60px] border-2 border-dashed border-white/5">
            <GlobeAltIcon className="w-24 h-24 text-gray-700 mx-auto mb-6 opacity-20" />
            <p className="text-gray-500 font-black tracking-[0.4em] uppercase text-sm">No live schedules available at this moment</p>
          </div>
        )}
      </div>
    </section>
  );
}
