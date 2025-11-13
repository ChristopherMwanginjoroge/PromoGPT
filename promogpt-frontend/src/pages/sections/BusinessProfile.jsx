import React from "react";

export default function BusinessProfile(){
  return (
    <div className="card" style={{marginBottom:12}}>
      <div className="h-stack" style={{justifyContent:'space-between'}}>
        <div>
          <div style={{fontSize:14, fontWeight:700, color:'var(--purple-700)'}}>Brand: Glow & Co</div>
          <div style={{color:'var(--muted)'}}>Beauty & self-care • Nairobi</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:800}}>Ksh 18.4k</div>
          <div style={{fontSize:12, color:'var(--muted)'}}>Monthly revenue (est)</div>
        </div>
      </div>
      <div style={{marginTop:12}}>
        <small style={{color:'var(--muted)'}}>Brand voice</small>
        <div style={{marginTop:6, fontWeight:600}}>Warm, helpful, confidence-building</div>
      </div>
    </div>
  );
}
