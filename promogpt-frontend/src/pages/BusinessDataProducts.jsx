import React, { useEffect, useState } from "react";
import api from "../api";

export default function BusinessDataProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await api.get("/business/products/"); // adjust endpoint if different
        // safe handling if backend returns object
        const data = Array.isArray(res.data) ? res.data : (res.data?.items || []);
        setProducts(data);
      } catch (err) {
        console.error("load products failed", err);
        // fallback demo
        setProducts([
          { id: 1, name: "Demo Candle", price: 1200, image: "https://via.placeholder.com/120" },
          { id: 2, name: "Demo Bag", price: 3500, image: "https://via.placeholder.com/120" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="container">
      <h2 className="h2">Product Data</h2>
      <div style={{ marginTop: 12 }}>
        {loading ? <div>Loading…</div> :
          <div style={{ display: "grid", gap: 12 }}>
            {products.map(p => (
              <div key={p.id} className="card" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={p.image || "/src/assets/placeholder.jpg"} alt={p.name} style={{width:100, height:80, objectFit:"cover", borderRadius:8}} />
                <div>
                  <div style={{ fontWeight:700 }}>{p.name}</div>
                  <div className="text-muted">Price: KES {p.price}</div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
