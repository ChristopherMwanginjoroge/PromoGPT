import React from "react";

export default function Profile(){
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Profile</div>
          <div className="page-sub">Manage account and brand</div>
        </div>
      </div>

      <div className="card">
        <div style={{fontWeight:700}}>{user.first_name || 'Guest'}</div>
        <div style={{color:'var(--muted)'}}>{user.email}</div>
      </div>
    </div>
  );
}
