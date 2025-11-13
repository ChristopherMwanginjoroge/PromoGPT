import React from "react";

export default function BusinessProfile(){
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Business Profile</div>
          <div className="page-sub">Manage your brand, tone and website integration</div>
        </div>
      </div>

      <div className="card">
        <div style={{display:'flex', gap:12}}>
          <div style={{width:120, height:120, borderRadius:12, background:'linear-gradient(90deg,#fff,#f7f0ff)'}} />
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>Glow & Co</div>
            <div style={{color:'var(--muted)'}}>Beauty & self-care • Nairobi</div>
            <div style={{marginTop:12}}>
              <div style={{fontSize:13, color:'var(--muted)'}}>Brand tone</div>
              <div style={{fontWeight:700}}>Friendly & Informative</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
