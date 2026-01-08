import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, navItems }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className=" border border-white/8">
                <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                    <Navbar navItems={navItems} />
                </div>
            </header>

            <main className="flex-1">
                <div className="max-w-6xl mx-auto px-5 py-8">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    )
}
