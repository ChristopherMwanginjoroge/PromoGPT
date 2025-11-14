import React, { useEffect, useState } from "react";
import api from "../api";
import "../index.css";

export default function Intelligence(){
  const [convos, setConvos] = useState([]); // {id,title,last}
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]); // messages of active convo
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    // load conversation list (demo fallback)
    const loadList = async () => {
      try {
        const res = await api.get('/ai/conversations/');
        setConvos(Array.isArray(res.data) ? res.data : (res.data?.items || []));
      } catch (err) {
        setConvos([
          { id: 'demo-1', title: 'Marketing Plan', last: 'You: How to sell more candles?' },
          { id: 'demo-2', title: 'Launch Campaign', last: 'You: Prepare a 3-step plan' }
        ]);
      }
    };
    loadList();
  },[]);

  useEffect(()=>{
    // load messages of active convo (demo)
    if (!activeId) return;
    const loadMessages = async () => {
      try {
        const res = await api.get(`/ai/conversations/${activeId}/messages/`);
        setMessages(Array.isArray(res.data) ? res.data : (res.data?.messages || []));
      } catch (err) {
        // demo sample
        setMessages([
          { from: 'assistant', text: `Hi — how can I help you today?` },
        ]);
      }
    };
    loadMessages();
  }, [activeId]);

  const send = async () => {
    if (!input.trim()) return;
    const msg = { from: 'user', text: input };
    setMessages(prev => [...prev, msg]);
    setInput('');
    setLoading(true);

    try {
      const res = await api.post(`/ai/conversations/${activeId || 'new'}/send/`, { text: msg.text });
      // assume backend returns assistant reply
      const reply = res.data.reply || res.data.text || "No reply";
      setMessages(prev => [...prev, { from: 'assistant', text: reply }]);
    } catch (err) {
      console.error('send failed', err);
      setMessages(prev => [...prev, { from: 'assistant', text: 'Failed to get response. Try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{display:'flex', gap:12}}>
      <aside style={{width:280}}>
        <div className="card">
          <h3 className="small">Conversations</h3>
          <div style={{marginTop:8}}>
            {convos.map(c => (
              <div key={c.id} className="card" style={{marginBottom:8, cursor:'pointer'}} onClick={()=>setActiveId(c.id)}>
                <div style={{fontWeight:700}}>{c.title}</div>
                <div className="text-muted" style={{fontSize:13}}>{c.last}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div style={{flex:1}}>
        <div className="card" style={{display:'flex', flexDirection:'column', height:'70vh'}}>
          <div style={{flex:1, overflowY:'auto', padding:12}}>
            {messages.length === 0 ? <div className="text-muted">Select a conversation or start a new message</div> :
              messages.map((m,i)=>(
                <div key={i} style={{marginBottom:10, textAlign: m.from==='user' ? 'right' : 'left'}}>
                  <div style={{
                    display:'inline-block',
                    background: m.from==='user' ? 'linear-gradient(90deg,#6D28D9,#5B21B6)' : '#f2f2f5',
                    color: m.from==='user' ? '#fff' : '#111',
                    padding:'8px 12px',
                    borderRadius: 12,
                    maxWidth:'80%'
                  }}>{m.text}</div>
                </div>
              ))
            }
          </div>

          <div style={{padding:12, borderTop:'1px solid #eee'}}>
            <div style={{display:'flex', gap:8}}>
              <input className="input" placeholder="Ask the assistant..." value={input} onChange={e=>setInput(e.target.value)} />
              <button className="btn btn-primary" onClick={send} disabled={loading}>{loading ? '...' : 'Send'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
