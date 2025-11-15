// src/pages/ProductData.jsx
import React, { useState } from "react";

const MOCK_PRODUCTS = [
  { id: 1, name: "Velvet Slip Dress", category: "Apparel", price: 2400, stock: 120, img: "/assets/placeholder.jpg" },
  { id: 2, name: "Kitenge Headwrap", category: "Accessories", price: 420, stock: 420, img: "/assets/placeholder.jpg" },
  { id: 3, name: "Handmade Leather Bag", category: "Accessories", price: 4200, stock: 24, img: "/assets/placeholder.jpg" },
  { id: 4, name: "Scented Soy Candle (Set)", category: "Home", price: 1200, stock: 86, img: "/assets/placeholder.jpg" },
  { id: 5, name: "Organic Lip Balm", category: "Beauty", price: 250, stock: 540, img: "/assets/placeholder.jpg" },
  { id: 6, name: "Embroidered Scarf", category: "Apparel", price: 700, stock: 92, img: "/assets/placeholder.jpg" },
  { id: 7, name: "Beaded Anklet", category: "Accessories", price: 150, stock: 410, img: "/assets/placeholder.jpg" },
  { id: 8, name: "Hand-painted Mug", category: "Home", price: 650, stock: 210, img: "/assets/placeholder.jpg" },
];

export default function ProductData() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  const filtered = MOCK_PRODUCTS.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ paddingTop: 84, paddingLeft: 26, paddingRight: 26 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div>
          <h2 style={{ margin: 0 }}>Products</h2>
          <div style={{ color: "rgba(0,0,0,0.55)" }}>Showing Sarah’s catalogue — {filtered.length} items</div>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <input className="input" placeholder="Search product..." value={query} onChange={e => setQuery(e.target.value)} />
          <select className="input" value={category} onChange={e => setCategory(e.target.value)} style={{ width: 160 }}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button className="btn btn-primary">Add product</button>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
        gap: 14
      }}>
        {filtered.map(p => (
          <div key={p.id} className="card" style={{ padding: 12 }}>
            <div style={{ height: 140, background: "#fff", borderRadius: 8, overflow: "hidden", marginBottom: 10 }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 800 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: "rgba(0,0,0,0.6)" }}>{p.category}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 800 }}>KES {p.price}</div>
                <div style={{ fontSize: 13, color: "rgba(0,0,0,0.6)" }}>{p.stock} in stock</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="btn btn-outline">Edit</button>
              <button className="btn btn-outline">Duplicate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
