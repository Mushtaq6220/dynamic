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
  return (
    <section className="py-12 px-6 relative overflow-hidden bg-[#061A2B]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-6 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <GlobeAltIcon className="w-4 h-4" /> Live Operations Board
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C158]">Flight Schedules</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-bold text-lg leading-relaxed">
            Direct departures managed and confirmed by FLY International operations for the Hajj & Umrah season 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flightSchedules.map((flight, idx) => (
            <div 
              key={flight.id} 
              className="group relative bg-[#0B2439] border border-white/5 rounded-[48px] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-10 border-b border-white/5">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#061A2B] rounded-3xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform shadow-2xl">
                    <PaperAirplaneIcon className="w-10 h-10 text-[#D4AF37] rotate-45" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-1">{flight.airline}</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{flight.flightNumber}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tighter mb-1">
                      {flight.price}
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[9px] font-black uppercase tracking-widest">
                      <ShieldCheckIcon className="w-3.5 h-3.5" /> {flight.status}
                   </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2">Departing From</p>
                  <h4 className="text-2xl font-black text-white">{flight.from.split('(')[1].replace(')', '')}</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1">{flight.from.split('(')[0]}</p>
                </div>

                <div className="flex flex-col items-center flex-1 max-w-[120px]">
                   <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#0B2439] border border-blue-500/30 rounded-full flex items-center justify-center shadow-2xl">
                         <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                   </div>
                   <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.3em] mt-4">Non-Stop</p>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.2em] mb-2">Arriving At</p>
                  <h4 className="text-2xl font-black text-white">{flight.to.split('(')[1].replace(')', '')}</h4>
                  <p className="text-xs font-bold text-gray-500 mt-1">{flight.to.split('(')[0]}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#061A2B] px-8 py-5 rounded-[24px] border border-white/5 flex flex-col items-center text-center">
                  <CalendarIcon className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Departure Date</p>
                  <p className="text-sm font-black text-white">{flight.date}</p>
                </div>
                <div className="bg-[#061A2B] px-8 py-5 rounded-[24px] border border-white/5 flex flex-col items-center text-center">
                  <ClockIcon className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Departure Time</p>
                  <p className="text-sm font-black text-white">{flight.time}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 text-center">
                 <button className="w-full py-5 bg-white text-black font-black rounded-3xl hover:bg-[#D4AF37] hover:text-white transition-all text-xs uppercase tracking-[0.3em] shadow-2xl">
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
