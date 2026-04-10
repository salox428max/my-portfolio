'use client';
import { useState } from 'react';

export const AIChat = () => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: message }),
      });
      const data = await res.json();
      // Claude javobi data.content[0].text ichida keladi
      setResult(data.content[0].text);
    } catch (e) {
      setResult("Xatolik: API bilan bog'lanishda muammo bo'ldi.");
    }
    setLoading(false);
  };

  return (
    <section className="py-20">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AI Assistant
        </h2>
        
        <div className="space-y-4">
          <textarea 
            className="w-full bg-black/50 border border-zinc-700 rounded-xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            rows={3}
            placeholder="Menga dasturlash yoki loyihalarim haqida savol bering..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <button 
            onClick={handleAsk}
            disabled={loading || !message.trim()}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "O'ylanmoqda..." : "Yuborish"}
          </button>

          {result && (
            <div className="mt-8 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700 text-zinc-300 leading-relaxed animate-in fade-in slide-in-from-top-2">
              <p className="whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};