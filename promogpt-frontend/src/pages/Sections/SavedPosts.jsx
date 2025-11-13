import React, { useState } from "react";

const initial = [
  { id:1, text:"Flash Sale: 24 hours only — 30% off the Glow Kit", tags:['sale','awareness'] },
  { id:2, text:"Customer love: Why people are raving about our soap bars", tags:['engagement'] },
  { id:3, text:"Bundle offer: Buy 2 get 1 free this weekend", tags:['promotion','sales'] },
];

export default function SavedPosts(){
  const [posts, setPosts] = useState(initial);
  const [q, setQ] = useState("");
  const filtered = posts.filter(p => p.text.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:700}}>Saved posts</div>
        <input className="input" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} style={{width:220}}/>
      </div>

      <div style={{marginTop:12, display:'grid', gap:10}}>
        {filtered.map(p => (
          <div key={p.id} className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontWeight:600}}>{p.text}</div>
              <div style={{marginTop:6}}>
                {p.tags.map(t=> <span key={t} style={{background:'#fff6db', color:'#b45309', padding:'4px 8px', borderRadius:8, marginRight:6, fontSize:12}}>{t}</span>)}
              </div>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button className="btn-outline" onClick={()=>navigator.clipboard?.writeText(p.text)}>Copy</button>
              <button className="btn-outline" onClick={()=>setPosts(posts.filter(x=>x.id!==p.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
