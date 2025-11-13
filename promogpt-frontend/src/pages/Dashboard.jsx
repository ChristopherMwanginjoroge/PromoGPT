import React from "react";
import BusinessProfile from "./sections/BusinessProfile";
import CreateContent from "./sections/CreateContent";
import SavedPosts from "./sections/SavedPosts";

/* lightweight sparkline */
function Sparkline({ data=[] }){
  const W=200, H=50, pad=6;
  const max=Math.max(...data,1), min=Math.min(...data,0);
  const step = (W - pad*2) / (data.length -1 || 1);
  const points = data.map((v,i) => {
    const x = pad + i*step;
    const y = pad + (1 - (v - min)/(max - min || 1))*(H - pad*2);
    return `${x},${y}`;
  }).join(' ');
  return <svg width={W} height={H}><polyline fill="none" stroke="#6D28D9" strokeWidth="3" points={points} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Dashboard(){
  const sales = [120,180,140,220,200,260,300];
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Your business at a glance</div>
          <div className="page-sub">Personalized recommendations and quick actions</div>
        </div>
        <div>
          <button className="btn">+ New Campaign</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card card">
          <div className="h-stack">
            <div style={{flex:1}}>
              <div className="stat-label">Campaigns</div>
              <div className="stat-value">12</div>
            </div>
            <Sparkline data={sales}/>
          </div>
        </div>

        <div className="stat-card card">
          <div className="stat-label">Generated posts</div>
          <div className="stat-value">320</div>
          <div style={{marginTop:8}} className="page-sub">Top performing: "Weekend Sale"</div>
        </div>

        <div className="stat-card card">
          <div className="stat-label">Average engagement</div>
          <div className="stat-value">4.3%</div>
          <div className="page-sub">Last 30 days</div>
        </div>
      </div>

      <div style={{marginTop:18}} className="grid-3">
        <div>
          <BusinessProfile />
          <CreateContent />
        </div>

        <div>
          <SavedPosts />
        </div>
      </div>
    </div>
  );
}
