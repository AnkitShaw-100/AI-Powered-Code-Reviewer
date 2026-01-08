import React from 'react'

export default function Docs(){
  return (
    <div className="bg-[#0f1315] rounded-xl p-6 border border-white/5 text-slate-300">
      <h3 className="text-white">Documentation</h3>
      <section className="mt-4">
        <h4 className="font-semibold">Getting started</h4>
        <p className="text-slate-400 mt-2">Paste code into the Playground to run a review. Use the Report page to inspect issues.</p>
      </section>

      <section className="mt-4">
        <h4 className="font-semibold">Best practices</h4>
        <ul className="text-slate-400 mt-2 list-disc ml-5">
          <li>Run reviews on PRs and CI.</li>
          <li>Address critical issues first.</li>
        </ul>
      </section>
    </div>
  )
}
