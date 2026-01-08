import React from 'react'
import { useState } from 'react'

const docs = [
  { id: 'getting-started', title: 'Getting started', body: 'Paste code into the Playground to run a review. Use the Report page to inspect issues and export findings.' },
  { id: 'best-practices', title: 'Best practices', body: 'Run reviews on PRs and CI. Address critical security issues first and prioritize fixes by impact.' },
  { id: 'api', title: 'API & Integrations', body: 'Integrate DeepReview into CI pipelines, or use the API to trigger reviews programmatically.' }
]

export default function Docs(){
  const [active, setActive] = useState(docs[0].id)

  const content = docs.find(d => d.id === active)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            <h2 className="text-2xl font-bold text-white">Docs</h2>
            <nav className="mt-4 flex flex-col gap-2">
              {docs.map(d => (
                <button
                  key={d.id}
                  onClick={() => setActive(d.id)}
                  className={`text-left px-3 py-2 rounded-md ${active === d.id ? 'bg-[#0c1113] text-white' : 'text-slate-300 hover:bg-[#071014]'}`}>
                  {d.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="md:col-span-3 bg-[#071017] border border-white/5 rounded-2xl p-8 text-slate-300">
          <h3 className="text-2xl text-white font-semibold mb-4">{content.title}</h3>
          <p className="text-slate-400 mb-6">{content.body}</p>

          {content.id === 'getting-started' && (
            <section>
              <h4 className="font-semibold text-white mb-2">Quick example</h4>
              <pre className="bg-[#061014] p-4 rounded-md text-sm font-mono text-slate-300">{`// paste code in Playground
function sum(a, b) {
  return a + b
}`}</pre>
            </section>
          )}

          {content.id === 'api' && (
            <section>
              <h4 className="font-semibold text-white mb-2">API</h4>
              <p className="text-slate-400 text-sm">POST <code className="bg-[#061014] px-1 rounded text-xs text-slate-200">/ai/review-code</code> with JSON <code className="bg-[#061014] px-1 rounded text-xs text-slate-200">{'{ code: string }'}</code></p>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
