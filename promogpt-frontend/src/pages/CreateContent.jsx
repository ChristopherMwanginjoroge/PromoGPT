import React, { useState } from "react";

export default function CreateContent(){
  const [title, setTitle] = useState("");
  const [tone, setTone] = useState("friendly");
  const [output, setOutput] = useState("");

  function handleCreate(){
    if(!title) return alert('Add a short product line or title');
    setOutput(`✨ ${title} — ${tone} tone — Short caption: ${title} now available!`);
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Create Content</div>
          <div className="page-sub">Detailed generator and templates</div>
        </div>
      </div>

      <div className="card">
        <div style={{display:'flex', gap:10}}>
          <input className="input" placeholder="Product / campaign short title" value={title} onChange={e=>setTitle(e.target.value)} />
          <select className="input" value={tone} onChange={e=>setTone(e.target.value)} style={{width:180}}>
            <option value="friendly">Friendly</option>
            <option value="professional">Professional</option>
            <option value="bold">Bold</option>
            <option value="playful">Playful</option>
          </select>
          <button className="btn" onClick={handleCreate}>Create</button>
        </div>

        {output && <div style={{marginTop:12}} className="card"><div style={{fontWeight:700}}>AI Result</div><div style={{marginTop:8}}>{output}</div></div>}
      </div>
    </div>
  );
}
