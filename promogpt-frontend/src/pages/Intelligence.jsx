// src/pages/Intelligence.jsx
import React, { useState } from "react";

const MOCK_CONVO = [
  { from: "assistant", text: "Hi Sarah — I analysed your sales. Your weekend revenue increased by 18% this month." },
  { from: "user", text: "That's great. Which product performed best?" },
  { from: "assistant", text: "Velvet Slip Dress contributed 26% of revenue; consider restocking sizes M & L." },
  { from: "user", text: "Can you create a 7-day campaign idea for that product?" },
  { from: "assistant", text: "Yes. Day 1: Teaser (story), Day 2: influencer post, Day 3: discount bundle, ... I'll draft captions." },
];

export default function Intelligence() {
  const [messages, setMessages] = useState(MOCK_CONVO);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => setMessages(prev => [...prev, { from: "assistant", text: "Got it — drafting ideas now..." }]), 700);
  };

  const handleUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return alert("No file selected (mock)");
    alert(`Uploaded ${f.name} (mock). Data will be synced.`);
  };

  return (
    <div style={{ paddingTop: 84, paddingLeft: 26, paddingRight: 26 }}>
      <div style={{ display: "flex", gap: 14 }}>
        {/* Left: agent tiles vertical */}
        <aside style={{ width: 260 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>AI Agents</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
              <div style={{ padding: 12, borderRadius: 8, background: "linear-gradient(90deg,#3b0764,#7c3aed)", color: "#fff" }}>Business Intelligence</div>
              <div style={{ padding: 12, borderRadius: 8, background: "linear-gradient(90deg,#5b21b6,#c084fc)", color: "#fff" }}>Content Generator</div>
              <div style={{ padding: 12, borderRadius: 8, background: "linear-gradient(90deg,#9333ea,#7c3aed)", color: "#fff" }}>Campaign Builder</div>
              <div style={{ padding: 12, borderRadius: 8, background: "linear-gradient(90deg,#c084fc,#f0abfc)", color: "#111" }}>Ad Creator</div>
            </div>
          </div>
        </aside>

        {/* Middle: chat */}
        <main style={{ flex: 1 }}>
          <div className="card" style={{ padding: 16 }}>
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>How can I help you today, Sarah?</div>
              <div style={{ color: "rgba(0,0,0,0.6)", marginTop: 6 }}>Your AI assistant. Upload sales CSV to get targeted insights.</div>
            </div>

            <div style={{
              background: "linear-gradient(180deg,#120022,#240042)",
              padding: 16,
              borderRadius: 12,
              color: "#fff",
              minHeight: 420,
              display: "flex",
              flexDirection: "column"
            }}>
              <div style={{ overflowY: "auto", flex: 1, paddingRight: 8 }}>
                {messages.map((m, i) => (
                  <div key={i} style={{ marginBottom: 12, display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "72%",
                      padding: 12,
                      borderRadius: 12,
                      background: m.from === "user" ? "linear-gradient(90deg,#2a0055,#5b21b6)" : "linear-gradient(90deg,#c084fc,#e9d8fd)",
                      color: m.from === "user" ? "#fff" : "#110022"
                    }}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask something about sales, products or campaigns..."
                  style={{ flex: 1, padding: 10, borderRadius: 8, border: "none" }}
                />
                <button className="btn btn-primary" onClick={send}>Send</button>
                <label title="Upload CSV" style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                  <input type="file" accept=".csv" style={{ display: "none" }} onChange={handleUpload} />
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    📁
                  </div>
                </label>

                <button className="btn btn-outline" onClick={() => alert("Syncing data (mock)...")}>Sync</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
