"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChartBarIcon, 
  ChatBubbleLeftEllipsisIcon, 
  PaperAirplaneIcon, 
  CubeIcon,
  WrenchScrewdriverIcon,
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon
} from "@heroicons/react/24/outline";

export default function AdminLayout({ children, activeTab, setActiveTab, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: ChartBarIcon, color: "from-blue-500 to-indigo-600" },
    { id: "packages", label: "Packages", icon: CubeIcon, color: "from-amber-500 to-orange-600" },
    { id: "services", label: "Services", icon: WrenchScrewdriverIcon, color: "from-teal-500 to-emerald-600" },
    { id: "inquiries", label: "Inquiries", icon: ChatBubbleLeftEllipsisIcon, color: "from-purple-500 to-pink-600" },
    { id: "flights", label: "Flight Schedules", icon: PaperAirplaneIcon, color: "from-sky-500 to-blue-600" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen !bg-white flex flex-col md:flex-row font-sans overflow-hidden">
      
      {/* MOBILE HEADER */}
      <header className="md:hidden bg-white/95 backdrop-blur-md p-4 flex justify-between items-center shadow-lg z-[60] border-b border-gray-100">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xs italic">F</span>
           </div>
           <span className="font-extrabold text-black uppercase tracking-tighter text-xs">FLY Admin</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-black transition-transform active:scale-90">
          {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </header>

      {/* MOBILE BACKDROP */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 !bg-white border-r border-gray-200/60 p-8 flex flex-col transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl md:shadow-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="flex items-center gap-4 mb-14">
           <div className="w-12 h-12 bg-black rounded-3xl flex items-center justify-center shadow-2xl shadow-black/20">
              <span className="text-white font-black text-2xl italic">F</span>
           </div>
           <div className="flex flex-col">
              <span className="font-black text-black tracking-tight uppercase text-lg leading-tight">FLY Admin</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Portal</span>
           </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`
                w-full flex items-center gap-4 px-6 py-4 rounded-3xl font-black text-[11px] uppercase tracking-widest transition-all duration-300
                ${activeTab === item.id 
                  ? 'bg-gray-100 text-black shadow-inner translate-x-1' 
                  : 'text-gray-400 hover:text-black hover:bg-gray-50/50'}
              `}
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${activeTab === item.id ? 'scale-110' : 'opacity-60 grayscale-[40%]'}`}>
                <item.icon className="w-5 h-5" />
              </div>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4 pt-10 border-t border-gray-100">
           <button 
             onClick={onLogout}
             className="w-full flex items-center gap-4 px-6 py-4 rounded-3xl font-black text-[11px] uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all"
           >
              <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center text-red-500">
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
              </div>
              Sign Out
           </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-16 overflow-y-auto max-h-screen no-scrollbar !bg-[#F8FAFC]">
         {children}
      </main>
    </div>
  );
}
