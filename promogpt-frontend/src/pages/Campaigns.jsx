import React, { useState } from "react";

export default function Campaigns(){
  const [campaigns] = useState([
    {id:1, name:'Summer Glow', goal:'sales', status:'active', created:'2025-10-01'},
    {id:2, name:'Holiday Launch', goal:'awareness', status:'paused', created:'2025-09-15'},
  ]);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Campaigns</div>
          <div className="page-sub">Create, duplicate and analyze your campaigns</div>
        </div>
        <div><button className="btn">+ New campaign</button></div>
      </div>

      <div style={{display:'grid', gap:12}}>
        {campaigns.map(c=>(
          <div key={c.id} className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontWeight:700}}>{c.name}</div>
              <div style={{color:'var(--muted)', fontSize:13}}>{c.goal} • created {c.created}</div>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button className="btn-outline">{c.status}</button>
              <button className="btn">Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
