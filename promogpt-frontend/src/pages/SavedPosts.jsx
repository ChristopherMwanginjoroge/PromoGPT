// src/pages/SavedPosts.jsx
import React, { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

export default function SavedPosts(){
  const { demoMode } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const load = async ()=>{
      try {
        if (demoMode) {
          setPosts([
            { id:1, text:"Demo: 20% off all candles! #candles", date:"2025-11-01" },
            { id:2, text:"Launch new perfume — summer special!", date:"2025-10-25" },
          ]);
        } else {
          const res = await api.get('/posts/');
          setPosts(res.data || []);
        }
      } catch(err){
        console.error(err);
      }
    };
    load();
  }, [demoMode]);

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Saved Posts</h2>
        <p className="text-muted">Your generated & saved promotional content.</p>

        <div style={{marginTop:12}}>
          {posts.length === 0 ? <div className="text-muted">No posts yet.</div> :
            posts.map(p => (
              <div key={p.id} className="card" style={{marginTop:10}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div style={{fontWeight:600}}>{p.title || p.date}</div>
                </div>
                <div style={{marginTop:8, whiteSpace:'pre-wrap'}}>{p.text}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
