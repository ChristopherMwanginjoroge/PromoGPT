import React from "react";

export default function Demo(){
  return (
    <div className="page">
      <div className="page-title">Live Demo</div>
      <div className="card">
        <div style={{fontWeight:700}}>Try a ready demo</div>
        <p style={{color:'var(--muted)'}}>Generate a sample promo for "Glow Kit" with one click</p>
        <div style={{marginTop:10}}>
          <button className="btn" onClick={()=>alert('Generated sample (demo)')}>Generate sample</button>
        </div>
      </div>
    </div>
  );
}
