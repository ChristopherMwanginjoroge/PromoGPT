// src/pages/Generator.jsx
import React, { useState } from "react";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

export default function Generator(){
  const { demoMode } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      if (demoMode) {
        setResult("✨ Demo output — short, punchy promo: 'Handmade leather bag — 20% off this week!'");
      } else {
        const res = await api.post('/ai/generate/', { prompt });
        setResult(res.data.output || res.data.text || JSON.stringify(res.data));
      }
    } catch(err){
      console.error(err);
      setResult("⚠️ Generation failed. Check network or backend.");
    } finally { setLoading(false); }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">AI Promo Content Generator</h2>
        <p className="text-muted">Describe your product, goal or upload assets (coming soon)</p>

        <textarea className="generator-input" placeholder="Write your brief..." value={prompt} onChange={(e)=>setPrompt(e.target.value)} />

        <div style={{marginTop:12, display:'flex', gap:8}}>
          <button className="btn btn-primary" onClick={handleGenerate} disabled={loading}>{loading ? 'Generating…' : 'Generate'}</button>
          <button className="btn btn-outline" onClick={() => { setPrompt(''); setResult(''); }}>Clear</button>
        </div>

        <div className="generator-output card" style={{marginTop:12}}>
          {result ? <pre style={{whiteSpace:'pre-wrap'}}>{result}</pre> : <div className="text-muted">Result will appear here</div>}
        </div>
      </div>
    </div>
  );
}
