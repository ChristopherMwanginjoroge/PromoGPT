import React, { useState } from "react";

export default function CreateContent(){
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  function fakeGenerate(){
    if(!prompt.trim()) return;
    const out = [
      `🔥 ${prompt} — Buy now and get 20% off. Limited time!`,
      `✨ Looking for ${prompt}? Our customers say it's life-changing.`,
      `🎯 Boost your results with ${prompt} — order today.`,
    ];
    setResults(out);
  }

  return (
    <div className="card" style={{marginTop:12}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:700, color:'var(--purple-700)'}}>Quick Generator</div>
        <small style={{color:'var(--muted)'}}>AI preview</small>
      </div>

      <textarea className="prompt-box" placeholder="Describe the product or campaign (short)..." value={prompt} onChange={(e)=>setPrompt(e.target.value)} />

      <div style={{marginTop:10, display:'flex', gap:10}}>
        <button className="btn" onClick={fakeGenerate}>Generate</button>
        <button className="btn-outline" onClick={()=>{setPrompt(''); setResults([])}}>Clear</button>
      </div>

      <div style={{marginTop:12}}>
        {results.map((r,i)=>(
          <div key={i} className="card" style={{marginBottom:8}}>
            <div style={{fontWeight:600}}>{r}</div>
            <div style={{marginTop:8, display:'flex', gap:8}}>
              <button className="btn-outline" onClick={()=>navigator.clipboard?.writeText(r)}>Copy</button>
              <button className="btn-outline" onClick={()=>alert('Saved to library (demo)')}>Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
