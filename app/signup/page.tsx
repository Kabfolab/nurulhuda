export default function Signup(){
  return(
    <div className="min-h-screen bg-[#5b21b6] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#5b21b6]"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-[#fde047]/20 rounded-full blur-[120px]"></div>
      <div className="relative w-full max-w-[420px] bg-white rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.35)] p-8">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#facc15] flex items-center justify-center text-[#5b21b6] text-2xl font-black">ن</div>
        <h2 className="text-[24px] font-black text-center mt-4 text-[#1e1b4b]">Create Account</h2>
        <div className="mt-6 space-y-4">
          <input placeholder="Full name" className="w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] outline-none" />
          <input placeholder="Email address" className="w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] outline-none" />
          <input type="password" placeholder="Password (6+ chars)" className="w-full h-12 px-4 rounded-xl border-2 border-[#ede9fe] bg-[#f5f3ff] outline-none" />
          <a href="/dashboard" className="block w-full h-12 leading-[48px] text-center rounded-xl bg-[#facc15] text-[#5b21b6] font-black">Create Account</a>
          <p className="text-center text-[14px] text-slate-600">Have account? <a href="/login" className="font-black text-[#6d28d9]">Log in</a></p>
        </div>
      </div>
    </div>
  )
}
