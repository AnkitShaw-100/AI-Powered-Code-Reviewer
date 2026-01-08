import React from 'react'

const rows = [
  {id:1,title:'Review — feature/login', date:'2026-01-05', note:'2 critical'},
  {id:2,title:'Review — api/payment', date:'2025-12-20', note:'no issues'},
]

export default function History(){
  return (
    <div>
      <h3 className="mb-4">History</h3>
      <div className="flex flex-col gap-3">
        {rows.map(r=> (
          <div key={r.id} className="flex justify-between items-center p-3 rounded-md bg-white/2 border border-white/5 hover:-translate-y-1 transition">
            <div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-slate-400 text-base">{r.date} · {r.note}</div>
            </div>
            <div className="text-slate-400">View</div>
          </div>
        ))}
      </div>
    </div>
  )
}
