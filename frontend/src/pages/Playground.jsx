import React, {useState} from 'react'

export default function Playground(){
  const [code, setCode] = useState(`// Paste code here to review\nfunction hello(){\n  console.log('Hello world')\n}`)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function runReview(){
    setLoading(true)
    setError(null)
    setResult(null)
    try{
      const res = await fetch('http://localhost:3000/ai/review-code', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ code })
      })

      const json = await res.json()
      if(!res.ok || !json.success){
        setError(json.message || 'Review failed')
      } else {
        setResult(json.data)
      }
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-[#081018] rounded-xl p-4 border border-white/5">
        <div className="flex items-center justify-between mb-3 text-slate-400">
          <div>Playground</div>
          <div>Language: JavaScript</div>
        </div>

        <textarea
          value={code}
          onChange={e=>setCode(e.target.value)}
          className="w-full h-64 bg-[#061018] p-3 rounded-md text-base font-mono border border-white/5 text-slate-100"
        />

        <div className="mt-3 flex items-center gap-3">
          <button onClick={runReview} className="bg-violet-500 text-white px-4 py-2 rounded-lg font-semibold" disabled={loading}>
            {loading ? 'Running…' : 'Run Review'}
          </button>
          <button className="text-slate-300 px-3 py-2 rounded-md">Suggest Fixes</button>
          <button className="text-slate-300 px-3 py-2 rounded-md">Export Report</button>
        </div>

        {error && <div className="mt-4 text-red-400">{error}</div>}

        {result && (
          <div className="mt-4 bg-[#061018] p-4 rounded-md border border-white/5">
            <h4 className="mb-2">Review Result</h4>
            <pre className="whitespace-pre-wrap text-base text-slate-200">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>

      <aside className="w-full md:w-72 flex flex-col gap-4">
        <div className="bg-[#0f1315] rounded-xl p-4 border border-white/5">
          <h4 className="m-0 text-base font-semibold">Recent</h4>
          <div className="mt-3 text-slate-400 text-base">No recent reviews yet.</div>
        </div>
        <div className="bg-[#0f1315] rounded-xl p-4 border border-white/5 text-slate-400">Tips: paste code and press Run Review</div>
      </aside>
    </div>
  )
}
