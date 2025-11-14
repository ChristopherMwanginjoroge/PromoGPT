import React, { useState } from "react";
import api from "../api";

export default function Ledger(){
  // keep a flexible rows array for manual entry
  const [rows, setRows] = useState([{ id: Date.now(), product:'', date:'', qty:'', price:'' }]);
  const [saving, setSaving] = useState(false);

  const addRow = () => setRows(prev => [...prev, { id: Date.now(), product:'', date:'', qty:'', price:'' }]);
  const updateRow = (id, key, val) => setRows(prev => prev.map(r => r.id===id ? { ...r, [key]: val } : r));
  const removeRow = (id) => setRows(prev => prev.filter(r => r.id !== id));

  const save = async () => {
    setSaving(true);
    try {
      // send bulk ledger rows to backend
      await api.post('/ledger/bulk/', { rows });
      // trigger backend analysis model - endpoint example
      await api.post('/ai/analyze-ledger/', { rows });
      alert('Saved and analysis started');
      setRows([{ id: Date.now(), product:'', date:'', qty:'', price:'' }]);
    } catch (err) {
      console.error('Ledger save failed', err);
      // fallback: store locally if backend fails
      localStorage.setItem('ledger_backup', JSON.stringify(rows));
      alert('Save failed; data backed up locally');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Ledger</h2>
        <p className="text-muted">Add sales entries manually or paste CSV later.</p>

        <div style={{overflowX:'auto', marginTop:12}}>
          <table style={{width:'100%', borderCollapse:'collapse'}}>
            <thead>
              <tr style={{textAlign:'left', borderBottom:'1px solid #eee'}}>
                <th>Product</th><th>Date</th><th>Qty</th><th>Price</th><th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td style={{padding:8}}><input className="input" value={row.product} onChange={e=>updateRow(row.id,'product',e.target.value)} /></td>
                  <td style={{padding:8}}><input className="input" type="date" value={row.date} onChange={e=>updateRow(row.id,'date',e.target.value)} /></td>
                  <td style={{padding:8}}><input className="input" value={row.qty} onChange={e=>updateRow(row.id,'qty',e.target.value)} /></td>
                  <td style={{padding:8}}><input className="input" value={row.price} onChange={e=>updateRow(row.id,'price',e.target.value)} /></td>
                  <td style={{padding:8}}>
                    <button className="btn btn-outline" onClick={()=>removeRow(row.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button className="btn btn-primary" onClick={addRow}>Add Row</button>
          <button className="btn btn-accent" onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save & Analyze'}</button>
        </div>
      </div>
    </div>
  );
}
