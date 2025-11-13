import React from "react";

export default function Support(){
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Help & Support</div>
          <div className="page-sub">FAQs, docs and contact</div>
        </div>
      </div>

      <div className="card">
        <div style={{fontWeight:700}}>Frequently asked</div>
        <ul style={{marginTop:10, color:'var(--muted)'}}>
          <li>How to connect my store?</li>
          <li>How to generate bulk posts?</li>
          <li>Billing and limits</li>
        </ul>
        <div style={{marginTop:12}}>
          <button className="btn">Contact support</button>
        </div>
      </div>
    </div>
  );
}
