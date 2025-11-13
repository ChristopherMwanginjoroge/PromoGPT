import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding(){
  const nav = useNavigate();
  const [form, setForm] = useState({brand:'', industry:'', tone:'friendly'});

  function finish(e){ e?.preventDefault(); localStorage.setItem('brandProfile', JSON.stringify(form)); nav('/dashboard'); }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', minHeight:'80vh'}}>
      <div className="card" style={{width:640}}>
        <h2>Welcome — set up your brand</h2>
        <p style={{color:'var(--muted)'}}>This helps PromoGPT generate on-brand promos.</p>

        <div className="form-row" style={{marginTop:12}}>
          <input className="input" placeholder="Brand name" value={form.brand} onChange={e=>setForm(f=>({...f,brand:e.target.value}))}/>
          <input className="input" placeholder="Industry" value={form.industry} onChange={e=>setForm(f=>({...f,industry:e.target.value}))}/>
        </div>

        <div style={{marginTop:12}}>
          <label style={{display:'block', marginBottom:6, color:'var(--muted)'}}>Brand tone</label>
          <select className="input" value={form.tone} onChange={e=>setForm(f=>({...f,tone:e.target.value}))}>
            <option value="friendly">Friendly</option>
            <option value="professional">Professional</option>
            <option value="playful">Playful</option>
            <option value="bold">Bold</option>
          </select>
        </div>

        <div style={{marginTop:12, display:'flex', gap:8}}>
          <button className="btn" onClick={finish}>Finish setup</button>
          <button className="btn-outline" onClick={()=>nav('/dashboard')}>Skip</button>
        </div>
      </div>
    </div>
  );
}
