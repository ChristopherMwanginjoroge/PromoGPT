import React, { useState } from "react";

export default function Ledger(){
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({product:'', units:'', revenue:''});

  function add(){
    if(!form.product) return alert('Enter product');
    setEntries(prev=>[{...form, id:Date.now()}, ...prev]);
    setForm({product:'', units:'', revenue:''});
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">User Ledger</div>
          <div className="page-sub">Record product & sales data</div>
        </div>
      </div>

      <div className="card">
        <div className="form-row">
          <input className="input" placeholder="Product" value={form.product} onChange={e=>setForm(f=>({...f, product:e.target.value}))} />
          <input className="input" placeholder="Units sold" value={form.units} onChange={e=>setForm(f=>({...f, units:e.target.value}))} />
          <input className="input" placeholder="Revenue" value={form.revenue} onChange={e=>setForm(f=>({...f, revenue:e.target.value}))} />
          <button className="btn" onClick={add}>Add</button>
        </div>

        <table className="table" style={{marginTop:12}}>
          <thead>
            <tr><th>Product</th><th>Units</th><th>Revenue</th></tr>
          </thead>
          <tbody>
            {entries.map(e=>(
              <tr key={e.id}><td>{e.product}</td><td>{e.units}</td><td>{e.revenue}</td></tr>
            ))}
            {entries.length===0 && <tr><td colSpan={3} style={{color:'var(--muted)'}}>No ledger entries yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
