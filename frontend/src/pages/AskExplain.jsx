import React, { useState } from 'react'

export default function AskExplain() {
    const [messages, setMessages] = useState([
        { from: 'ai', text: 'Hi — paste code or ask a question.' }
    ])
    const [text, setText] = useState('')

    function send() {
        if (!text.trim()) return
        setMessages(m => [...m, { from: 'user', text }, { from: 'ai', text: '(AI) Example response summarizing the issue.' }])
        setText('')
    }

    return (
        <div className="bg-[#0f1315] rounded-xl p-4 border border-white/5">
            <h3 className="mb-3">Ask / Explain</h3>
            <div className="flex flex-col gap-3 max-h-105 overflow-auto">
                {messages.map((m, i) => (
                    <div key={i} className={`max-w-[75%] p-3 rounded-lg ${m.from === 'user' ? 'self-end bg-linear-to-r from-[#07101a] to-[#0b1220] border border-white/5' : 'self-start bg-white/2 border border-white/5'}`}>{m.text}</div>
                ))}
            </div>
            <div className="flex gap-3 mt-3">
                <input className="w-full bg-[#061018] p-2 rounded-md border border-white/5 text-base" placeholder="Ask the model or paste code..." value={text} onChange={e => setText(e.target.value)} />
                <button className="bg-violet-500 text-white px-3 py-2 rounded-md" onClick={send}>Send</button>
            </div>
        </div>
    )
}
