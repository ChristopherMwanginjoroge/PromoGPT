// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/* Mock user */
const user = {
  name: "Sarah",
  business: "Sarah's Boutique",
  avatar: "/assets/user-placeholder.png",
};

const kpis = [
  { id: "rev", title: "Revenue (30d)", value: "KES 1,245,600", change: "+12.4%", color: "#8B5CF6" },
  { id: "orders", title: "Orders", value: "1,820", change: "+9.1%", color: "#06B6D4" },
  { id: "conv", title: "Conversion", value: "3.8%", change: "+0.5%", color: "#F59E0B" },
  { id: "avg", title: "Avg Order", value: "KES 1,432", change: "−2.1%", color: "#EC4899" },
];

const topProducts = [
  { id: 1, name: "Velvet Slip Dress", price: "KES 2,400", sold: 210 },
  { id: 2, name: "Kitenge Headwrap", price: "KES 420", sold: 185 },
  { id: 3, name: "Handmade Leather Bag", price: "KES 4,200", sold: 98 },
  { id: 4, name: "Scented Soy Candle (Set)", price: "KES 1,200", sold: 74 },
];

const recentCampaigns = [
  { id: 1, title: "Ramadan Promo", status: "Running", ctr: "3.2%" },
  { id: 2, title: "Weekend Flash Sale", status: "Scheduled", ctr: "—" },
  { id: 3, title: "New Collection Launch", status: "Draft", ctr: "—" },
];

export default function Dashboard() {
  const nav = useNavigate();

  return (
    <div style={{ paddingTop: 84, paddingLeft: 26, paddingRight: 26 }}>
      {/* Top summary + greeting */}
      <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 18 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 20, opacity: 0.9 }}>Welcome back, <strong>{user.name}</strong></div>
          <div style={{ marginTop: 6, color: "rgba(0,0,0,0.6)" }}>{user.business} • AI-powered insights</div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>Today</div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>KES 62,430</div>
            <div style={{ fontSize: 12, color: "rgba(0,0,0,0.55)" }}>12 orders</div>
          </div>
          <img src={user.avatar} alt="avatar" style={{ width: 54, height: 54, borderRadius: 12 }} />
        </div>
      </div>

      {/* KPI tiles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
        {kpis.map(k => (
          <div key={k.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>{k.title}</div>
              <div style={{ marginTop: 8, fontWeight: 700, fontSize: 18 }}>{k.value}</div>
              <div style={{ marginTop: 6, color: k.change.startsWith("+") ? "#059669" : "#dc2626" }}>{k.change}</div>
            </div>
            <div style={{ width: 64, height: 64, borderRadius: 12, background: `linear-gradient(135deg, ${k.color}, #fff)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800 }}>
              {k.id.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Mid row: Top products + Recent campaigns */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginTop: 16 }}>
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ margin: 0 }}>Top Products</h3>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-outline" onClick={() => nav("/business-data/products")}>View all products</button>
              <button className="btn btn-primary" onClick={() => nav("/business-data/products")}>Add product</button>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {topProducts.map(p => (
              <div key={p.id} style={{ flex: 1, borderRadius: 10, overflow: "hidden", background: "#fff", boxShadow: "0 4px 14px rgba(12,12,12,0.04)", padding: 12 }}>
                <div style={{ height: 110, background: "linear-gradient(180deg,#f4f0ff,#fff)", borderRadius: 8 }} />
                <div style={{ marginTop: 10, fontWeight: 700 }}>{p.name}</div>
                <div style={{ color: "rgba(0,0,0,0.6)" }}>{p.price} • {p.sold} sold</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Campaigns</h3>
          <div style={{ marginTop: 8 }}>
            {recentCampaigns.map(c => (
              <div key={c.id} style={{ display: "flex", justifyContent: "space-between", padding: 10, borderRadius: 8, background: c.status === "Running" ? "linear-gradient(90deg,#dbeafe,#ede9fe)" : "transparent", marginBottom: 8 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(0,0,0,0.6)" }}>{c.status}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800 }}>{c.ctr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row: Activity feed + Quick actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 14, marginTop: 16 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Recent Activity</h3>
          <ul style={{ marginTop: 12 }}>
            <li style={{ padding: 8 }}>
              <strong>Order #A1023</strong> — 3 items • KES 4,200 <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)" }}>2 hours ago</div>
            </li>
            <li style={{ padding: 8 }}>
              <strong>Inventory updated:</strong> Velvet Slip Dress — 12 left <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)" }}>6 hours ago</div>
            </li>
            <li style={{ padding: 8 }}>
              <strong>Campaign scheduled:</strong> Weekend Flash Sale <div style={{ fontSize: 12, color: "rgba(0,0,0,0.5)" }}>1 day ago</div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Quick Actions</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
            <button className="btn btn-primary" onClick={() => nav("/ai")}>Talk to AI (Business)</button>
            <button className="btn btn-outline" onClick={() => nav("/business-data")}>View Business Data</button>
            <button className="btn btn-outline" onClick={() => nav("/ledger")}>Open Ledger</button>
            <button className="btn btn-outline" onClick={() => nav("/campaigns")}>Create Campaign</button>
          </div>
        </div>
      </div>

      {/* Footer summary */}
      <div style={{ marginTop: 18, textAlign: "center", color: "rgba(0,0,0,0.45)" }}>
        PromoGPT — AI-assisted growth for small businesses • Mock data for Sarah
      </div>
    </div>
  );
}
