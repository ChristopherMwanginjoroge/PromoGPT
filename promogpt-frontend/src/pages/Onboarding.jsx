// src/pages/Onboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding(){
  const nav = useNavigate();
  const [brand,setBrand]=useState('');
  const [industry,setIndustry]=useState('');

  return (
    <div style={{padding:28}}>
      <div className="container">
        <div className="card">
          <h2 className="h2">Quick setup</h2>
          <p className="text-muted">Tell us about your brand to personalize your experience.</p>
          <div style={{marginTop:12}} className="form">
            <input className="input" placeholder="Brand or business name" value={brand} onChange={e=>setBrand(e.target.value)} />
            <input className="input" placeholder="Industry (e.g. Fashion, Food, Tech)" value={industry} onChange={e=>setIndustry(e.target.value)} />
            <div style={{display:'flex', gap:10}}>
              <button className="btn btn-primary" onClick={() => nav('/dashboard')}>Save & Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
