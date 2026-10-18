export default function Home() {
  return (
    <div className="min-h-screen bg-[#5b21b6] relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#5b21b6]"></div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#facc15]/30 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-[#fde047]/20 rounded-full blur-[120px]"></div>
      <div className="relative w-full max-w-[420px] bg-white rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.35)] p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#facc15] flex items-center justify-center text-[#5b21b6] text-3xl font-black">ن</div>
        <h1 className="text-[28px] font-black text-[#1e1b4b] mt-5">Nurul Huda</h1>
        <p className="text-slate-500 text-[14px] mt-2">Online School • Audio-visual</p>
        <div className="mt-8 space-y-3">
          <a href="/login" className="block w-full h-12 leading-[48px] rounded-xl bg-[#facc15] text-[#5b21b6] font-black">Log In</a>
          <a href="/signup" className="block w-full h-12 leading-[48px] rounded-xl bg-[#ede9fe] text-[#6d28d9] font-bold">Create Account</a>
        </div>
      </div>
    </div>
  )
}
