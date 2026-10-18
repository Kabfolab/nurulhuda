"use client"
import { useState } from "react"
export default function Login(){
  const [show,setShow]=useState(false)
  return(
    <div className="min-h-screen bg-[#5b21b6] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#5b21b6]"></div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#facc15]/30 rounded-full blur-[100px]"></div>
      <div className="relative w-full max-w-[420px] bg-white rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.35)] p-8">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#facc15] flex items-center justify-center text-[#5b21b6] text-2xl font-black">ن</div>
        <h2 className="text-[24px] font-black text-center mt-4 text-[#1e1b4b]">Welcome Back</h2>
        <div className="mt-6 space-y-4">
          <input placeholder="Email address" className="w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] focus:bg-white focus:border-[#7c3aed] outline-none" />
          <div className="relative"><input type={show?"text":"password"} placeholder="Password" className="w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] focus:bg-white focus:border-[#7c3aed] outline-none" /><button onClick={()=>setShow(!show)} className="absolute right-3 top-3 text-[11px] font-bold bg-[#fef9c3] text-[#5b21b6] px-2 py-1 rounded-lg">{show?"Hide":"Show"}</button></div>
          <a href="/dashboard" className="block w-full h-12 leading-[48px] text-center rounded-xl bg-[#facc15] text-[#5b21b6] font-black">Log In</a>
          <p className="text-center text-[14px] text-slate-600">No account? <a href="/signup" className="font-black text-[#6d28d9] underline decoration-[#facc15] decoration-2">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}
