"use client";

import { useState } from "react";
import { servicePages } from "../../data/servicePages";
import { 
  WrenchScrewdriverIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  PlusIcon,
  CheckCircleIcon,
  XMarkIcon,
  InformationCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function ServiceManager() {
  const [services, setServices] = useState(servicePages);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    title: "", slug: "", summary: "", highlights: ""
  });

  const handleEdit = (service) => {
    setEditingService(service);
    setFormData({
      ...service,
      highlights: service.highlights.join("\n")
    });
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      highlights: formData.highlights.split("\n").filter(line => line.trim() !== "")
    };

    if (editingService) {
      setServices(services.map(s => s.slug === editingService.slug ? { ...formattedData, slug: s.slug } : s));
    } else {
      setServices([...services, { ...formattedData, slug: formattedData.title.toLowerCase().replace(/ /g, "-") }]);
    }
    setShowModal(false);
    setEditingService(null);
    setFormData({ title: "", slug: "", summary: "", highlights: "" });
  };

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-gray-100">
        <div>
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">Content Strategy</p>
          <h1 className="text-5xl font-black text-black tracking-tighter leading-none">Platform Services</h1>
        </div>

        <button 
          onClick={() => { setShowModal(true); setEditingService(null); setFormData({ title: "", slug: "", summary: "", highlights: "" }); }}
          className="flex items-center gap-3 px-10 py-5 bg-black text-white font-black rounded-[24px] shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all text-[11px] uppercase tracking-widest"
        >
          <PlusIcon className="w-5 h-5 text-emerald-400" /> Deploy New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-12 rounded-[56px] shadow-2xl shadow-gray-200/40 flex flex-col group border border-gray-50 hover:translate-y-[-6px] transition-all duration-500">
             <div className="w-20 h-20 bg-emerald-50 rounded-[32px] flex items-center justify-center mb-10 text-emerald-600 group-hover:bg-black group-hover:text-white transition-all shadow-xl shadow-emerald-500/5 group-hover:shadow-black/20">
                <WrenchScrewdriverIcon className="w-10 h-10" />
             </div>
             
             <div className="flex-1">
                <h3 className="text-3xl font-black text-black mb-4 tracking-tighter">{service.title}</h3>
                <p className="text-sm text-gray-400 font-bold leading-relaxed mb-10 italic">
                   "{service.summary}"
                </p>
                <div className="space-y-3 mb-12">
                   {service.highlights.slice(0, 4).map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full w-fit">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
                        {item}
                     </div>
                   ))}
                </div>
             </div>

             <div className="flex items-center gap-3 pt-8 border-t border-gray-50">
                <button 
                  onClick={() => handleEdit(service)}
                  className="flex-1 py-5 bg-gray-50 text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all text-[11px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                   Revise Content <ArrowRightIcon className="w-4 h-4 opacity-50" />
                </button>
                <button onClick={() => setServices(services.filter(s => s.slug !== service.slug))} className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm">
                   <TrashIcon className="w-6 h-6" />
                </button>
             </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl">
           <div className="bg-white w-full max-w-2xl rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="px-12 py-12 border-b border-gray-50 flex items-center justify-between bg-white sticky top-0 z-10">
                 <div>
                    <h2 className="text-4xl font-black text-black tracking-tighter leading-none mb-1">{editingService ? 'Edit Service' : 'New Service'}</h2>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2 px-1">Global Platform Content</p>
                 </div>
                 <button onClick={() => setShowModal(false)} className="w-14 h-14 bg-gray-50 hover:bg-black hover:text-white rounded-2xl transition-all flex items-center justify-center">
                    <XMarkIcon className="w-8 h-8" />
                 </button>
              </div>
              
              <form onSubmit={handleSave} className="p-12 space-y-10 max-h-[70vh] overflow-y-auto no-scrollbar">
                 <div className="grid grid-cols-2 gap-10">
                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-4">Service Identity</label>
                       <input 
                         required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                         placeholder="e.g. Flight Booking"
                         className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-emerald-100 font-bold transition-all text-black"
                       />
                    </div>
                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-4">Core Summary</label>
                       <textarea 
                         required rows={5} value={formData.summary} onChange={(e) => setFormData({...formData, summary: e.target.value})}
                         placeholder="Detailed description of the service..."
                         className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-emerald-100 font-bold transition-all text-black resize-none"
                       />
                    </div>
                    <div className="col-span-2">
                       <div className="flex items-center justify-between mb-4">
                          <label className="block text-[11px] font-black text-black uppercase tracking-widest">Key Selling Points</label>
                          <span className="text-[9px] text-gray-400 font-black flex items-center gap-1 uppercase tracking-widest"><InformationCircleIcon className="w-4 h-4 text-emerald-500" /> One per line</span>
                       </div>
                       <textarea 
                         required rows={6} value={formData.highlights} onChange={(e) => setFormData({...formData, highlights: e.target.value})}
                         placeholder="Highlight 1&#10;Highlight 2&#10;Highlight 3"
                         className="w-full px-8 py-6 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-emerald-100 font-bold leading-relaxed text-black"
                       />
                    </div>
                 </div>

                 <button type="submit" className="w-full py-6 bg-black text-white font-black rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs">
                    {editingService ? 'Commit Changes' : 'Push to Production'}
                 </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}
