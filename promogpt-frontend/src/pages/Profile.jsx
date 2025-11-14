// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

export default function Profile(){
  const { demoMode, user } = useAuth();
  const [profile, setProfile] = useState({ name:'', email:'' });

  useEffect(()=>{
    if (demoMode) { setProfile({ name: user?.name || 'Demo User', email: user?.email || 'demo@promogpt.app' }); return; }
    const load = async ()=> { try { const res = await api.get('/users/me/'); setProfile(res.data); } catch(err){ console.error(err); } };
    load();
  }, [demoMode, user]);

  return (
    <div className="container">
      <div className="card">
        <h2 className="h2">Profile</h2>
        <div style={{marginTop:12}} className="form">
          <input className="input" value={profile.name} onChange={e=>setProfile({...profile, name:e.target.value})} />
          <input className="input" value={profile.email} onChange={e=>setProfile({...profile, email:e.target.value})} />
          <div>
            <button className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}
