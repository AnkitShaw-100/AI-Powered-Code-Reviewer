import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const DEFAULT_NAV = [
    { path: '/', label: 'Home' },
    { path: '/playground', label: 'Playground' },
    { path: '/docs', label: 'Docs' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/profile', label: 'Profile' }
]

export default function Navbar({ navItems = [] }) {
    const items = (navItems && navItems.length) ? navItems : DEFAULT_NAV
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full text-xl flex items-center justify-center bg-slate-700">CG</div>
                    <div>
                        <h1 className="text-sm font-semibold">CodeGuardian</h1>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    {items.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `text-sm px-3 py-1 rounded-md ${isActive ? 'text-white bg-violet-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                        >{item.label}</NavLink>
                    ))}
                </div>

                <div className="md:hidden">
                    <button aria-expanded={open} onClick={() => setOpen(v => !v)} className="text-slate-400 px-2 py-1 border border-white/5 rounded-md">{open ? 'Close' : 'Menu'}</button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${open ? 'block' : 'hidden'} md:hidden mt-3`}>
                <div className="flex flex-col gap-2">
                    {items.map(item => (
                        <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? 'bg-violet-600/20 text-white' : 'text-slate-300 hover:bg-white/5'}`}>
                            {item.label}
                        </NavLink>
                    ))}
                    <NavLink to="/playground" onClick={() => setOpen(false)} className="block mt-1 px-3 py-2 rounded-md bg-linear-to-r from-violet-500 to-cyan-400 text-[#041025] font-semibold">Try Review</NavLink>
                </div>
            </div>
        </div>
    )
}
