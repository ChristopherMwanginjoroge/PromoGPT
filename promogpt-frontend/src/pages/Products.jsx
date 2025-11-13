import React from "react";

export default function Products(){
  const items = [
    {id:1, title:"Glow Kit", price:"Ksh 1,200"},
    {id:2, title:"Scented Candle", price:"Ksh 850"},
    {id:3, title:"Leather Bag", price:"Ksh 5,900"},
  ];
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Products</div>
          <div className="page-sub">Your store items (manual / synced)</div>
        </div>
        <div><button className="btn">+ Add Product</button></div>
      </div>

      <div className="product-grid">
        {items.map(it=>(
          <div key={it.id} className="card">
            <div style={{height:120, borderRadius:10, background:'linear-gradient(90deg,#fff,#f7f0ff)'}} />
            <div style={{marginTop:10, fontWeight:700}}>{it.title}</div>
            <div style={{color:'var(--muted)'}}>{it.price}</div>
            <div style={{marginTop:10, display:'flex', gap:8}}>
              <button className="btn-outline">Edit</button>
              <button className="btn-outline">Sync</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
