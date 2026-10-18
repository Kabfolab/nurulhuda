"use client"
import { useState } from "react"
export default function Dashboard(){
  const [room,setRoom]=useState("NurulHuda-Math101")
  return(
    <div className="min-h-screen bg-[#f5f3ff] p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#5b21b6] rounded-[24px] p-6 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#facc15]/20 rounded-full blur-[60px]"></div>
          <h2 className="relative text-xl font-black">Dashboard</h2><p className="relative text-sm opacity-80 mt-1">Lean Deen and Dunya • Anywhere • Anytime</p>
        </div>
        <div className="bg-white rounded-[20px] shadow p-6 mt-4">
          <label className="text-[13px] font-bold text-[#5b21b6]">Class Room Name</label>
          <input value={room} onChange={e=>setRoom(e.target.value)} className="mt-2 w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] outline-none text-sm font-bold" />
          <a href={`/class?room=${encodeURIComponent(room)}`} className="mt-4 block w-full h-12 leading-[48px] text-center rounded-xl bg-[#facc15] text-[#5b21b6] font-black">Join Class - Video & Audio ON</a>
          <p className="text-[12px] text-slate-500 mt-3">Teacher: type Quran, Mathematics, English, etc. Students type SAME name to join.</p>
        </div>
      </div>
    </div>
  )
}
