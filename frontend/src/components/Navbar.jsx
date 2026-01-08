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
            <div className="flex items-center justify-between px-4 py-2 rounded-full">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full text-xl flex items-center justify-center text-[#feeb01] font-semibold bg-gray-800">CG</div>
                    <div>
                        <h1 className="text-base font-semibold">DeepReview</h1>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    {items.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => isActive
                                ? 'text-[#0c1113] bg-[#feeb01] px-3 py-1 rounded-md font-semibold'
                                : 'text-white px-3 py-1 rounded-md hover:text-[#feeb01] transition-colors font-semibold'}
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
                    <NavLink to="/playground" onClick={() => setOpen(false)} className="block mt-1 px-3 py-2 rounded-md bg-[#feeb01] text-[#0c1113] font-semibold">Try Review</NavLink>
                </div>
            </div>
        </div>
    )
}
