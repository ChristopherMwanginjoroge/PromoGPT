// src/pages/SalesData.jsx
import React from "react";

const series = [
  { day: "01", value: 54000 },
  { day: "02", value: 62000 },
  { day: "03", value: 48000 },
  { day: "04", value: 73000 },
  { day: "05", value: 68000 },
  { day: "06", value: 79000 },
  { day: "07", value: 88000 },
  { day: "08", value: 76000 },
  { day: "09", value: 92000 },
  { day: "10", value: 86000 },
];

const categorySales = [
  { name: "Apparel", value: 420000, color: "#8B5CF6" },
  { name: "Accessories", value: 210000, color: "#06B6D4" },
  { name: "Home", value: 125000, color: "#F59E0B" },
  { name: "Beauty", value: 98000, color: "#EC4899" },
];

const transactions = Array.from({ length: 12 }).map((_, i) => ({
  id: `TRX-${1000 + i}`,
  date: `2025-11-${10 + i}`,
  product: ["Velvet Slip Dress","Kitenge Headwrap","Handmade Leather Bag","Scented Soy Candle"][i % 4],
  qty: [2,1,3,1][i % 4],
  revenue: [4800,420,12600,1200][i % 4]
}));

function LineChart({ data, width=700, height=160 }) {
  const max = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (d.value / max) * height;
    return `${x},${y}`;
  }).join(" ");
  // area path for visual pop
  const area = `M0,${height} L${points} L${width},${height} Z`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height}>
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.03"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g1)" />
      <polyline fill="none" stroke="#7c3aed" strokeWidth="3" points={points} strokeLinecap="round" strokeLinejoin="round" />
      {data.map((d,i)=> {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d.value / max) * height;
        return <circle key={i} cx={x} cy={y} r={4} fill="#7c3aed" />;
      })}
    </svg>
  );
}

function Bars({ items }) {
  const max = Math.max(...items.map(i => i.value));
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "end", height: 140 }}>
      {items.map(it => {
        const h = (it.value / max) * 120;
        return (
          <div key={it.name} style={{ textAlign: "center", flex: 1 }}>
            <div style={{ height: h, background: it.color, borderRadius: 8 }} />
            <div style={{ marginTop: 8, fontSize: 13 }}>{it.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function SalesData() {
  return (
    <div style={{ paddingTop: 84, paddingLeft: 26, paddingRight: 26 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: 0 }}>Sales Overview</h2>
          <div style={{ color: "rgba(0,0,0,0.6)" }}>Mock sales for Sarah — last 10 days</div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-outline">Export CSV</button>
          <button className="btn btn-primary">Sync Data</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginTop: 14 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Revenue Trend</h3>
          <LineChart data={series} width={700} height={160} />
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <div className="card" style={{ padding: 12, flex: 1 }}>
              <div style={{ color: "rgba(0,0,0,0.6)" }}>Total revenue (10d)</div>
              <div style={{ fontWeight: 800, marginTop: 6 }}>KES 740,000</div>
            </div>

            <div className="card" style={{ padding: 12, flex: 1 }}>
              <div style={{ color: "rgba(0,0,0,0.6)" }}>Avg daily</div>
              <div style={{ fontWeight: 800, marginTop: 6 }}>KES 74,000</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Category Sales</h3>
          <Bars items={categorySales} />
          <div style={{ marginTop: 12 }}>
            {categorySales.map(c => (
              <div key={c.name} style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ width: 12, height: 12, background: c.color, borderRadius: 4 }} />
                  <div>{c.name}</div>
                </div>
                <div style={{ fontWeight: 700 }}>KES {c.value.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h3 style={{ marginTop: 0 }}>Recent Transactions</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
          <thead>
            <tr style={{ textAlign: "left", color: "rgba(0,0,0,0.7)" }}>
              <th style={{ padding: 8 }}>ID</th>
              <th>Date</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t => (
              <tr key={t.id} style={{ borderTop: "1px solid #f1f1f1" }}>
                <td style={{ padding: 8 }}>{t.id}</td>
                <td>{t.date}</td>
                <td>{t.product}</td>
                <td>{t.qty}</td>
                <td>KES {t.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
