"use client";

import { useState } from "react";
import { 
  TrashIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ClockIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon
} from "@heroicons/react/24/outline";

const initialInquiries = [
  { id: 1, name: "Ahmed Abdullah", email: "ahmed@example.com", phone: "+91 98765 43210", message: "Interested in the Hajj 2026 Premium package. Please provide group discount details.", date: "2026-04-05", status: "unread" },
  { id: 2, name: "Sara Fatima", email: "sara.f@live.com", phone: "+91 82811 00000", message: "Inquiry about Madinah Ziyarats guided tours.", date: "2026-04-07", status: "read" },
  { id: 3, name: "Ibrahim Khan", email: "i.khan@gmail.com", phone: "+91 70000 11111", message: "Is the Hajj visa included in the super saver package?", date: "2026-04-08", status: "unread" },
];

export default function InquiryManager() {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteInquiry = (id) => {
    setInquiries(inquiries.filter(q => q.id !== id));
  };

  const markAsRead = (id) => {
    setInquiries(inquiries.map(q => q.id === id ? { ...q, status: "read" } : q));
  };

  const filteredInquiries = inquiries.filter(q => 
    q.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    q.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-gray-100">
        <div>
          <p className="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em] mb-4">Communications Hub</p>
          <h1 className="text-5xl font-black text-black tracking-tighter leading-none">Customer Leads</h1>
        </div>
        
        <div className="relative w-full md:w-96">
          <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search leads by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-[28px] w-full outline-none focus:ring-4 focus:ring-purple-50 font-bold transition-all text-black shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-[60px] overflow-hidden border border-gray-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/30 border-b border-gray-50 uppercase tracking-[0.25em]">
                <th className="px-12 py-10 text-[10px] font-black text-gray-400">Sender Profile</th>
                <th className="px-12 py-10 text-[10px] font-black text-gray-400">Inquiry Content</th>
                <th className="px-12 py-10 text-[10px] font-black text-gray-400">Current Phase</th>
                <th className="px-12 py-10 text-[10px] font-black text-gray-400">Operations</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-all group">
                  <td className="px-12 py-12">
                    <div className="flex flex-col gap-4">
                      <div className="w-16 h-16 bg-purple-50 rounded-[22px] flex items-center justify-center text-purple-600 font-black text-xl shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-all">
                        {inquiry.name.charAt(0)}
                      </div>
                      <div>
                        <span className="font-black text-black text-xl leading-none block mb-2">{inquiry.name}</span>
                        <div className="flex flex-col gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4 text-purple-200" />{inquiry.email}</span>
                          <span className="flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-purple-200" />{inquiry.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-12">
                     <div className="max-w-md">
                        <p className="text-gray-500 text-sm font-bold leading-relaxed italic mb-4">
                          "{inquiry.message}"
                        </p>
                        <div className="flex items-center gap-3 text-[9px] font-black text-gray-300 uppercase tracking-widest bg-gray-50 w-fit px-4 py-1.5 rounded-full">
                           <ClockIcon className="w-3.5 h-3.5" /> STAMPED {inquiry.date}
                        </div>
                     </div>
                  </td>
                  <td className="px-12 py-12">
                    {inquiry.status === "unread" ? (
                      <span className="px-6 py-2.5 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-blue-100 flex items-center gap-2 w-fit">
                         <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
                         Awaiting Action
                      </span>
                    ) : (
                      <span className="px-6 py-2.5 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-100 flex items-center gap-2 w-fit">
                         <CheckCircleIcon className="w-3.5 h-3.5" /> Resolved
                      </span>
                    )}
                  </td>
                  <td className="px-12 py-12">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => markAsRead(inquiry.id)}
                        className="w-14 h-14 bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-[22px] transition-all flex items-center justify-center shadow-sm"
                      >
                        <CheckCircleIcon className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={() => deleteInquiry(inquiry.id)}
                        className="w-14 h-14 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-[22px] transition-all flex items-center justify-center shadow-sm"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredInquiries.length === 0 && (
          <div className="py-32 text-center bg-white">
             <ChatBubbleLeftEllipsisIcon className="w-20 h-20 text-gray-150 mx-auto mb-6 opacity-10" />
             <p className="text-gray-300 font-black tracking-[0.3em] uppercase text-xs">Inbox is completely clear</p>
          </div>
        )}
      </div>
    </div>
  );
}
