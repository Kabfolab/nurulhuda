"use client"
import { useSearchParams } from "next/navigation"
export default function ClassRoom(){
  const params=useSearchParams()
  const room=params.get("room") || "NurulHuda-Math101"
  const jitsiUrl=`https://meet.jit.si/${room}`
  return (
    <div className="min-h-screen bg-[#1e1b4b] p-2">
      <div className="h-12 flex items-center px-4 text-white font-bold">
        <a href="/dashboard" className="text-[#facc15]">← Back</a>
        <span className="ml-4">Live: {room}</span>
      </div>
      <iframe src={jitsiUrl} allow="camera; microphone; fullscreen; display-capture; autoplay" className="w-full h-[90vh] bg-black rounded-[16px] border-0"></iframe>
    </div>
  )
}
