import React from 'react'

export default function Pricing(){
  return (
    <div>
      <h3 className="mb-4">Pricing</h3>
      <div className="flex gap-4">
        <div className="flex-1 bg-[#0f1315] rounded-xl p-6 border border-white/5">
          <h4 className="font-semibold">Free</h4>
          <div className="text-slate-400 mt-2">Basic reviews · community support</div>
          <div className="mt-4 text-2xl font-bold">$0</div>
        </div>

        <div className="flex-1 bg-[#0f1315] rounded-xl p-6 border border-white/5 transform scale-102 shadow-lg" style={{boxShadow:'0 8px 30px rgba(139,92,246,0.06)'}}>
          <h4 className="font-semibold">Pro</h4>
          <div className="text-slate-400 mt-2">Priority reviews · team features</div>
          <div className="mt-4 text-2xl font-bold">$12/mo</div>
          <div className="mt-4"><button className="bg-linear-to-r from-violet-500 to-cyan-400 text-[#041025] px-4 py-2 rounded-lg font-semibold">Selected</button></div>
        </div>

        <div className="flex-1 bg-[#0f1315] rounded-xl p-6 border border-white/5">
          <h4 className="font-semibold">Enterprise</h4>
          <div className="text-slate-400 mt-2">SAML, seats, SLAs</div>
          <div className="mt-4 text-2xl font-bold">Contact</div>
        </div>
      </div>
    </div>
  )
}
