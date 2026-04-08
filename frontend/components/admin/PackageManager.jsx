"use client";

import { useState } from "react";
import { 
  umrahPackages, 
  hajjPackages, 
  packageCategories 
} from "../../data/packageCatalog";
import { 
  ArchiveBoxIcon, 
  StarIcon, 
  ClockIcon,
  TagIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
  PhotoIcon,
  ArrowUpTrayIcon
} from "@heroicons/react/24/outline";

export default function PackageManager() {
  const [activeType, setActiveType] = useState("umrah");
  const [searchTerm, setSearchTerm] = useState("");
  const [umrahList, setUmrahList] = useState(umrahPackages);
  const [hajjList, setHajjList] = useState(hajjPackages);
  
  const [showModal, setShowModal] = useState(false);
  const [editingPkg, setEditingPkg] = useState(null);
  const [formData, setFormData] = useState({
    name: "", category: "super-saver", price: "", duration: "", image: "", description: "", features: ""
  });

  const displayPackages = activeType === "umrah" ? umrahList : hajjList;
  
  const filteredPackages = displayPackages.filter(p => 
    p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (pkg) => {
    setEditingPkg(pkg);
    setFormData({
      ...pkg,
      features: Array.isArray(pkg.features) ? pkg.features.join(", ") : pkg.features
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (activeType === "umrah") {
       setUmrahList(umrahList.filter(p => p.id !== id));
    } else {
       setHajjList(hajjList.filter(p => p.id !== id));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      features: formData.features.split(",").map(f => f.trim())
    };

    if (editingPkg) {
      if (activeType === "umrah") {
        setUmrahList(umrahList.map(p => p.id === editingPkg.id ? { ...formattedData, id: p.id } : p));
      } else {
        setHajjList(hajjList.map(p => p.id === editingPkg.id ? { ...formattedData, id: p.id } : p));
      }
    } else {
      const newPkg = { ...formattedData, id: `${activeType}-${Date.now()}` };
      if (activeType === "umrah") {
        setUmrahList([...umrahList, newPkg]);
      } else {
        setHajjList([...hajjList, newPkg]);
      }
    }
    setShowModal(false);
    setEditingPkg(null);
    setFormData({ name: "", category: "super-saver", price: "", duration: "", image: "", description: "", features: "" });
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-gray-100">
        <div>
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Inventory Management</p>
          <h1 className="text-5xl font-black text-black tracking-tighter">Package Catalog</h1>
        </div>

        <button 
          onClick={() => { setShowModal(true); setEditingPkg(null); setFormData({ name: "", category: "super-saver", price: "", duration: "", image: "", description: "", features: "" }); }}
          className="flex items-center gap-3 px-8 py-5 bg-black text-white font-black rounded-[24px] shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest"
        >
          <PlusIcon className="w-5 h-5" /> New {activeType === 'umrah' ? 'Umrah' : 'Hajj'} Offer
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex bg-white p-2 rounded-[28px] border border-gray-100 shadow-sm grow-0">
           <button 
             onClick={() => setActiveType("umrah")}
             className={`px-10 py-4 rounded-[22px] font-black transition-all text-[11px] uppercase tracking-[0.15em] ${activeType === 'umrah' ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
           >
             Umrah
           </button>
           <button 
             onClick={() => setActiveType("hajj")}
             className={`px-10 py-4 rounded-[22px] font-black transition-all text-[11px] uppercase tracking-[0.15em] ${activeType === 'hajj' ? 'bg-black text-white shadow-xl' : 'text-gray-400 hover:text-black'}`}
           >
             Hajj
           </button>
        </div>

        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder={`Filter ${activeType} listing...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-[28px] w-full outline-none focus:ring-4 focus:ring-blue-50/50 font-bold transition-all text-black shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-[48px] border border-gray-50 shadow-2xl shadow-gray-200/40 flex flex-col sm:flex-row overflow-hidden group hover:translate-y-[-4px] transition-all duration-500">
             <div className="w-full sm:w-60 h-60 relative overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                   <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[9px] font-black text-black uppercase tracking-[0.2em]">
                      {pkg.category}
                   </span>
                </div>
             </div>

             <div className="flex-1 p-10 flex flex-col justify-between border-l border-gray-50">
                <div>
                   <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-black text-black leading-tight tracking-tight">{pkg.name}</h3>
                      <div className="text-xl font-black text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full">{pkg.price}</div>
                   </div>
                   <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 pb-6 border-b border-gray-50">
                      <span className="flex items-center gap-2"><ClockIcon className="w-4 h-4 text-gray-300" />{pkg.duration}</span>
                      <span className="flex items-center gap-2"><TagIcon className="w-4 h-4 text-gray-300" />{pkg.id}</span>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                   <button 
                     onClick={() => handleEdit(pkg)}
                     className="flex-1 py-4 bg-gray-50 text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all text-[11px] uppercase tracking-widest"
                   >
                      Edit Package
                   </button>
                   <button 
                     onClick={() => handleDelete(pkg.id)}
                     className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                   >
                      <TrashIcon className="w-5 h-5" />
                   </button>
                </div>
             </div>
          </div>
        ))}

        {filteredPackages.length === 0 && (
          <div className="col-span-full py-32 text-center bg-white rounded-[60px] border-4 border-dashed border-gray-50">
             <ArchiveBoxIcon className="w-20 h-20 text-gray-150 mx-auto mb-6 opacity-10" />
             <p className="text-gray-300 font-black tracking-[0.3em] uppercase text-xs">No matches found in your inventory</p>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
           <div className="bg-white w-full max-w-2xl rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-300 overflow-y-auto max-h-[90vh] no-scrollbar">
              <div className="px-12 py-10 border-b border-gray-50 flex items-center justify-between bg-white sticky top-0 z-10">
                 <div>
                    <h2 className="text-3xl font-black text-black tracking-tighter leading-none mb-1">{editingPkg ? 'Edit Record' : 'Create Entry'}</h2>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Update your platform inventory</p>
                 </div>
                 <button onClick={() => setShowModal(false)} className="w-12 h-12 bg-gray-50 hover:bg-black hover:text-white rounded-2xl transition-all flex items-center justify-center">
                    <XMarkIcon className="w-6 h-6" />
                 </button>
              </div>
              
              <form onSubmit={handleSave} className="p-12 space-y-8">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2">
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Package Identity Image</label>
                        <div className="relative group/img">
                           {formData.image ? (
                             <div className="relative w-full h-60 rounded-[32px] overflow-hidden border-2 border-dashed border-gray-100">
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 flex flex-col items-center justify-center transition-all backdrop-blur-lg">
                                   <label className="cursor-pointer bg-white text-black px-8 py-3 rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-2xl">
                                      <ArrowUpTrayIcon className="w-4 h-4 text-blue-600" /> Switch Focus Image
                                      <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                   </label>
                                </div>
                             </div>
                           ) : (
                             <label className="w-full h-60 rounded-[32px] border-4 border-dashed border-gray-50 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-blue-50/30 transition-all group/up">
                                <div className="w-20 h-20 rounded-[30px] bg-blue-50 flex items-center justify-center text-blue-600 group-hover/up:scale-110 transition-transform shadow-xl shadow-blue-500/5">
                                   <PhotoIcon className="w-10 h-10" />
                                </div>
                                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover/up:text-blue-600">Select Image From Device</span>
                                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} required={!editingPkg} />
                             </label>
                           )}
                        </div>
                    </div>

                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Package Title</label>
                       <input 
                         required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all"
                       />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Segment</label>
                       <select 
                         value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                         className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold appearance-none"
                       >
                          {packageCategories.map(cat => <option key={cat.key} value={cat.key}>{cat.label}</option>)}
                       </select>
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Price Point</label>
                       <input required value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} placeholder="e.g. Rs. 54,999" className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all" />
                    </div>
                    <div>
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Duration</label>
                       <input required value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} placeholder="e.g. 15 Days" className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all" />
                    </div>
                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Key Inclusions (Comma separated)</label>
                       <input required value={formData.features} onChange={(e) => setFormData({...formData, features: e.target.value})} placeholder="Hotel, Flight, Visa..." className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all" />
                    </div>
                    <div className="col-span-2">
                       <label className="block text-[11px] font-black text-black uppercase tracking-widest mb-3">Narrative Description</label>
                       <textarea required rows={4} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-8 py-5 bg-gray-50 border-none rounded-3xl outline-none focus:ring-4 focus:ring-blue-100 font-bold transition-all resize-none" />
                    </div>
                 </div>

                 <button type="submit" className="w-full py-6 bg-black text-white font-black rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs">
                    {editingPkg ? 'Commit Updates' : 'Launch New Offer'}
                 </button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}
