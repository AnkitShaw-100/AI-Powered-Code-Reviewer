import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-auto py-6 border-t border-white/5 text-slate-400">
            <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
                <div>© {new Date().getFullYear()} CodeGuardian</div>
                <div>Built for developers — dark mode only</div>
            </div>
        </footer>
    )
}
