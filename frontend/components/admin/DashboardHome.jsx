"use client";

import { 
  ChartBarIcon, 
  ChatBubbleLeftEllipsisIcon, 
  PaperAirplaneIcon, 
  ArrowUpIcon
} from "@heroicons/react/24/outline";
import { umrahPackages, hajjPackages } from "../../data/packageCatalog";

export default function DashboardHome() {
  const totalPackages = umrahPackages.length + hajjPackages.length;

  const stats = [
    { label: "Total Inquiries", value: "128", icon: ChatBubbleLeftEllipsisIcon, trend: "+12% vs last week", grad: "from-blue-500 to-indigo-600" },
    { label: "Flight Routes", value: "24", icon: PaperAirplaneIcon, trend: "4 active today", grad: "from-emerald-500 to-teal-600" },
    { label: "Active Packages", value: totalPackages.toString(), icon: ChartBarIcon, trend: "Hajj 2026 Live", grad: "from-amber-500 to-orange-600" },
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-5xl font-black text-black leading-tight mb-2 tracking-tighter">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Administrator</span>
          </h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Operations & Management Dashboard</p>
        </div>
        
        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-3xl shadow-sm border border-gray-100">
           <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
           </div>
           <div>
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
              <p className="text-xs font-black text-black">All Systems Functional</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-12 rounded-[48px] shadow-2xl shadow-gray-200/40 hover:scale-[1.02] transition-all group border border-gray-100">
             <div className="flex items-start justify-between mb-10">
                <div className={`w-16 h-16 rounded-[22px] bg-gradient-to-br ${stat.grad} flex items-center justify-center text-white shadow-2xl shadow-gray-200 group-hover:rotate-[10deg] transition-all duration-300`}>
                   <stat.icon className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-4 py-2 rounded-full uppercase tracking-widest">
                   {stat.trend}
                </span>
             </div>
             <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.25em] mb-2">{stat.label}</p>
                <h3 className="text-5xl font-black text-black tracking-tighter">{stat.value}</h3>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10">
         <div className="bg-white p-12 rounded-[48px] shadow-2xl shadow-gray-200/40 border border-gray-100">
            <div className="flex items-center justify-between mb-12">
               <div>
                  <h3 className="text-3xl font-black text-black mb-1">Platform Activity</h3>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Live Event Stream</p>
               </div>
               <button className="text-[11px] font-black text-blue-600 uppercase tracking-widest hover:underline px-6 py-2 bg-blue-50 rounded-full transition-all">View All</button>
            </div>

            <div className="space-y-4">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="flex items-center gap-8 p-8 hover:bg-gray-50/80 rounded-[32px] transition-all cursor-default group border border-transparent hover:border-gray-200/50">
                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center font-black text-black text-xs group-hover:bg-black group-hover:text-white transition-all shadow-sm">AI</div>
                    <div className="flex-1">
                       <p className="text-base font-black text-black mb-1">System automated flight update for route KSA-DXB-99</p>
                       <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">2 hours ago</p>
                    </div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                       <ArrowUpIcon className="w-5 h-5 text-gray-200 group-hover:text-black transition-colors rotate-45" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
