"use client";

import { useState } from "react";
import { LockClosedIcon, UserIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function AdminLoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "flypass2026") {
      onLogin(true);
      setError("");
    } else {
      setError("Unauthorized access attempt detected.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 font-sans">
      <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-white p-16 rounded-[64px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col items-center">
          
          <div className="w-24 h-24 bg-black rounded-[32px] flex items-center justify-center mb-10 shadow-2xl shadow-black/20">
             <ShieldCheckIcon className="w-12 h-12 text-white" />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-black tracking-tighter mb-2">Secure Gate</h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] leading-relaxed">
              FLY International Tours & Travels<br/>Private Operations Console
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-8">
            <div className="space-y-6">
               <div>
                  <label className="block text-[10px] font-black text-black uppercase tracking-widest mb-3 ml-1">Identity UID</label>
                  <div className="relative">
                    <UserIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-black"
                      placeholder="Username"
                      required
                    />
                  </div>
               </div>

               <div>
                  <label className="block text-[10px] font-black text-black uppercase tracking-widest mb-3 ml-1">Access Protocol</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-gray-50 border-none rounded-3xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-black"
                      placeholder="Password"
                      required
                    />
                  </div>
               </div>
            </div>

            {error && (
              <div className="p-5 bg-red-50 text-red-500 text-[10px] font-black uppercase tracking-widest text-center rounded-2xl border border-red-100 animate-bounce">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-6 bg-black text-white font-black rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-xs"
            >
              Verify & Enter
            </button>
          </form>
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-[9px] text-gray-300 font-black uppercase tracking-[0.4em]">
              &copy; 2026 Admin Operations V2.0
           </p>
        </div>
      </div>
    </div>
  );
}
