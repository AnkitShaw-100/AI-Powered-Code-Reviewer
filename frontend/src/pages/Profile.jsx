import React from 'react'

export default function Profile(){
  return (
    <div className="bg-[#0f1315] rounded-xl p-6 border border-white/5">
      <h3 className="mb-4">Profile & Settings</h3>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-slate-400 text-base">Full name</label>
          <input className="w-full bg-[#061018] p-2 rounded-md border border-white/5 mt-2" />
        </div>
        <div className="flex-1">
          <label className="text-slate-400 text-base">Email</label>
          <input className="w-full bg-[#061018] p-2 rounded-md border border-white/5 mt-2" />
        </div>
      </div>

      <div className="mt-4 bg-[#081018] rounded-md p-4 border border-white/5">
        <h4 className="m-0">Preferences</h4>
        <div className="mt-3 flex gap-3">
          <div className="flex-1">
            <label className="text-slate-400 text-base">Layout</label>
            <select className="w-full bg-[#061018] p-2 rounded-md border border-white/5 mt-2">
              <option>Compact</option>
              <option>Comfortable</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-slate-400 text-base">Notification</label>
            <select className="w-full bg-[#061018] p-2 rounded-md border border-white/5 mt-2">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
