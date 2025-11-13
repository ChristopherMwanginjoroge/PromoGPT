import React from "react";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand">
        <div className="mark" aria-hidden>PG</div>
        <div>
          <div className="title">PromoGPT</div>
          <div style={{fontSize:12, color:'var(--muted)'}}>AI promos for your business</div>
        </div>
      </div>

      <div className="nav-actions">
        <button className="btn-outline">New campaign</button>
        <button className="btn">Create post</button>
      </div>
    </header>
  );
}

