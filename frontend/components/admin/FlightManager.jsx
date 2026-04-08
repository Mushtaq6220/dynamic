"use client";

import { useState } from "react";
import { 
  PlusIcon,
  TrashIcon,
  PencilSquareIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  GlobeAltIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

import { flightSchedules as initialFlights } from "../../data/flightSchedule";

export default function FlightManager() {
  const [flights, setFlights] = useState(initialFlights);
  const [showModal, setShowModal] = useState(false);
  const [editingFlight, setEditingFlight] = useState(null);
  
  const [formData, setFormData] = useState({
    name: "", from: "", to: "", date: "", time: "", price: ""
  });

  const handleEdit = (flight) => {
    setEditingFlight(flight);
    setFormData(flight);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setFlights(flights.filter(f => f.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingFlight) {
      setFlights(flights.map(f => f.id === editingFlight.id ? { ...formData, id: f.id } : f));
    } else {
      setFlights([...flights, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingFlight(null);
    setFormData({ name: "", from: "", to: "", date: "", time: "", price: "" });
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-gray-100">
        <div>
          <p className="text-[10px] font-black text-sky-600 uppercase tracking-[0.3em] mb-4">Logistics Control</p>
          <h1 className="text-5xl font-black text-black tracking-tighter leading-none">Global Schedules</h1>
        </div>
        
        <button 
          onClick={() => { setShowModal(true); setEditingFlight(null); setFormData({ name: "", from: "", to: "", date: "", time: "", price: "" }); }}
          className="flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-[24px] shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all text-[11px] uppercase tracking-widest"
        >
          <PlusIcon className="w-5 h-5 text-sky-400" /> Catalog New Flight
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white p-10 rounded-[60px] shadow-2xl shadow-gray-200/40 border border-gray-50 flex flex-col sm:flex-row items-center gap-10 group hover:translate-y-[-4px] transition-all duration-500">
             <div className="w-32 h-32 bg-sky-50 rounded-[40px] flex items-center justify-center flex-shrink-0 text-sky-600 shadow-inner group-hover:bg-black group-hover:text-white transition-all">
                <div className="text-center">
                   <PaperAirplaneIcon className="w-10 h-10 mx-auto mb-1 rotate-45" />
                   <p className="text-[8px] font-black uppercase tracking-[0.2em]">{flight.name.split(' ')[0]}</p>
                </div>
             </div>
             
             <div className="flex-1 space-y-6 w-full">
                <div className="flex items-start justify-between">
                   <div>
                      <h3 className="text-2xl font-black text-black tracking-tight mb-1">{flight.name}</h3>
                      <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                         <GlobeAltIcon className="w-4 h-4" /> International Route
                      </div>
                   </div>
                   <div className="bg-gray-50 px-5 py-2 rounded-2xl text-xl font-black text-sky-600 border border-gray-100 italic">
                      {flight.price}
                   </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-gray-50">
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none">Voyage Path</p>
                      <div className="flex items-center gap-2 text-sm font-black text-black">
                         {flight.from} <ArrowRightSmall className="w-4 h-4 text-sky-400" /> {flight.to}
                      </div>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest leading-none">Timing Deck</p>
                      <div className="flex items-center gap-2 text-sm font-black text-black">
                         <ClockIcon className="w-4 h-4 text-sky-400" /> {flight.date} <span className="text-gray-300 mx-1">|</span> {flight.time}
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-4">
                   <button 
                     onClick={() => handleEdit(flight)} 
                     className="flex-1 py-4 bg-gray-50 text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all text-[11px] uppercase tracking-widest shadow-sm"
                   >
                      Update Logistics
                   </button>
                   <button 
                     onClick={() => handleDelete(flight.id)} 
                     className="w-14 h-14 flex items-center justify-center bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                   >
                      <TrashIcon className="w-6 h-6" />
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl">
           <div className="bg-white w-full max-w-xl rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="px-12 py-10 border-b border-gray-50 flex items-center justify-between bg-white">
                 <h2 className="text-3xl font-black text-black tracking-tighter leading-none">{editingFlight ? 'Edit Schedule' : 'New Flight Record'}</h2>
                 <button onClick={() => setShowModal(false)} className="w-12 h-12 bg-gray-50 hover:bg-black hover:text-white rounded-2xl transition-all flex items-center justify-center">
                    <XMarkIcon className="w-8 h-8" />
                 </button>
              </div>
              
              <form onSubmit={handleSave} className="p-12 space-y-8">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Carrier / Flight Code</label>
                       <input 
                         required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold transition-all text-black"
                       />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Departure</label>
                       <input required value={formData.from} onChange={(e) => setFormData({...formData, from: e.target.value})} className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-black" />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Destination</label>
                       <input required value={formData.to} onChange={(e) => setFormData({...formData, to: e.target.value})} className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-black" />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Voyage Date</label>
                       <input required type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-black" />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Ticket Rate</label>
                       <input required value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-sky-100 font-bold text-black" />
                    </div>
                 </div>

                 <button type="submit" className="w-full py-6 bg-black text-white font-black rounded-3xl shadow-2xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    {editingFlight ? 'Commit Updates' : 'Schedule Launch'}
                 </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}

function ArrowRightSmall(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
