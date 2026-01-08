import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, navItems }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-linear-to-b from-white/2 to-transparent border-b border-white/5 backdrop-blur-sm">
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
