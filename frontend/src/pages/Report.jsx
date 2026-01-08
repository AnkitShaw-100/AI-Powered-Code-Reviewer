import React from 'react'

function SummaryCard({title, value}){
  return (
    <div className="flex-1 bg-[#0f1315] rounded-xl p-4 border border-white/5">
      <div className="text-slate-400 text-base">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

export default function Report(){
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <SummaryCard title="Issues Found" value="12" />
        <SummaryCard title="Critical" value="2" />
        <SummaryCard title="Files Scanned" value="14" />
      </div>

      <div className="bg-[#0f1315] rounded-xl p-4 border border-white/5">
        <h3 className="mt-0 mb-3">Issue List</h3>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center p-3 rounded-md bg-white/2 border border-white/5">
            <div>
              <div className="font-semibold">SQL injection risk in query</div>
              <div className="text-slate-400 text-base">src/controllers/user.js:45</div>
            </div>
            <div className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold">CRITICAL</div>
          </div>

          <div className="flex justify-between items-center p-3 rounded-md bg-white/2 border border-white/5">
            <div>
              <div className="font-semibold">Insecure random for tokens</div>
              <div className="text-slate-400 text-base">src/services/auth.js:21</div>
            </div>
            <div className="px-3 py-1 rounded-full bg-yellow-400 text-[#091018] text-xs font-bold">MAJOR</div>
          </div>
        </div>
      </div>
    </div>
  )
}
