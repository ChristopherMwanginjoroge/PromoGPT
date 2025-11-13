import React, { useState } from "react";
import { generatePromoContent } from "../api";

const handleGenerate = async () => {
  setLoading(true);
  try {
    const res = await generatePromoContent({ prompt, file });
    setResult(res.output || res.generated_text);
  } catch (err) {
    setError(err.error || "Error generating content");
  } finally {
    setLoading(false);
  }
};

export default function Generator(){
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputs, setOutputs] = useState([]);

  async function handleGenerate(){
    if(!prompt.trim() && !file) return alert('Add a prompt or upload a file');
    setLoading(true);
    // Demo: fake network
    setTimeout(()=> {
      setOutputs([
        `Promo 1 for "${prompt}" — Short & punchy: Drive urgency.`,
        `Promo 2 for "${prompt}" — Story-led caption for socials.`,
        `Promo 3 for "${prompt}" — CTA-focused copy for ads.`,
      ]);
      setLoading(false);
    }, 900);
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">AI Promo Generator</div>
          <div className="page-sub">Describe your campaign and press Generate.</div>
        </div>
        <div><small style={{color:'var(--muted)'}}>Demo mode</small></div>
      </div>

      <div className="card">
        <textarea className="prompt-box" placeholder="E.g. New handmade soap kit, target: women 25-44, tone: friendly" value={prompt} onChange={e=>setPrompt(e.target.value)}></textarea>
        <div style={{display:'flex', gap:10, marginTop:12}}>
          <input type="file" onChange={e=>setFile(e.target.files[0])} />
          <button className="btn" onClick={handleGenerate} disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>
          <button className="btn-outline" onClick={()=>{setPrompt(''); setFile(null); setOutputs([])}}>Reset</button>
        </div>
      </div>

      <div style={{marginTop:12}}>
        {outputs.map((o,i)=>(
          <div key={i} className="card" style={{marginBottom:10}}>
            <div style={{fontWeight:700}}>Result {i+1}</div>
            <div style={{marginTop:8}} className="result-card">{o}</div>
            <div style={{marginTop:10, display:'flex', gap:8}}>
              <button className="btn-outline" onClick={()=>navigator.clipboard?.writeText(o)}>Copy</button>
              <button className="btn-outline" onClick={()=>alert('Saved (demo)')}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
