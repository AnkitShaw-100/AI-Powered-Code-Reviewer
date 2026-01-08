import React from 'react'

export default function Pricing() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">Pricing</h2>
                <div className="text-sm text-slate-400">Billed monthly · upgrade anytime</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="rounded-2xl bg-[#0b1113] border border-white/6 p-6 flex flex-col">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Free</h3>
                            <p className="text-sm text-slate-400">Basic reviews · community support</p>
                        </div>
                        <div className="text-2xl font-bold text-white">$0</div>
                    </div>

                    <ul className="mt-4 space-y-2 text-slate-400 text-sm flex-1">
                        <li>Up to 100 lines / review</li>
                        <li>Community support</li>
                        <li>Basic insights</li>
                    </ul>

                    <div className="mt-6">
                        <a href="/playground" className="w-full inline-block text-center px-4 py-2 rounded-lg bg-transparent border border-white/5 text-slate-200">Get started</a>
                    </div>
                </article>

                <article className="rounded-2xl bg-linear-to-bl from-[#0b1113] to-[#071014] border border-white/6 p-8 transform scale-102 shadow-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#feeb01]/10 text-[#feeb01] text-xs font-semibold">Most popular</div>
                            <h3 className="text-2xl font-bold text-white mt-3">Pro</h3>
                            <p className="text-sm text-slate-300 mt-1">Priority reviews · team features</p>
                        </div>
                        <div className="text-3xl font-extrabold text-white">$12<span className="text-base font-medium">/mo</span></div>
                    </div>

                    <ul className="mt-6 grid gap-3 text-sm text-slate-300">
                        <li>Unlimited reviews</li>
                        <li>Team collaboration & sharing</li>
                        <li>Priority AI processing</li>
                        <li>Integrations (CI/CD)</li>
                    </ul>

                    <div className="mt-6">
                        <a href="/signup" className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#feeb01] text-[#0c1113] font-semibold rounded-lg">Start Pro</a>
                    </div>
                </article>

                <article className="rounded-2xl bg-[#0b1113] border border-white/6 p-6 flex flex-col">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                            <p className="text-sm text-slate-400">SAML, seats, SLAs</p>
                        </div>
                        <div className="text-2xl font-bold text-white">Contact</div>
                    </div>

                    <ul className="mt-4 space-y-2 text-slate-400 text-sm flex-1">
                        <li>Single sign-on (SAML)</li>
                        <li>Volume discounts & SLAs</li>
                        <li>Custom integrations</li>
                    </ul>

                    <div className="mt-6">
                        <a href="/contact" className="w-full inline-block text-center px-4 py-2 rounded-lg bg-transparent border border-white/5 text-slate-200">Contact sales</a>
                    </div>
                </article>
            </div>
        </div>
    )
}
