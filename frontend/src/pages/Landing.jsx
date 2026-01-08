import React from 'react'

export default function Landing(){
  return (
    <section className="rounded-xl p-8 bg-[#0f1315] border border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold">Intelligent code reviews, faster.</h2>
          <p className="text-slate-400 mt-3">AI-powered insights for developers — find issues, improve security, and ship confidently. Minimal, focused, and dark by default.</p>
          <div className="mt-6">
            <button className="bg-linear-to-r from-violet-500 to-cyan-400 text-[#041025] px-4 py-2 rounded-lg font-semibold shadow">Get Started</button>
          </div>
        </div>

        <div className="w-full md:w-96 bg-[#081018] rounded-lg p-4 font-mono text-base border border-white/5">
          <div>const review = await ai.review(code)</div>
        </div>
      </div>
    </section>
  )
}
