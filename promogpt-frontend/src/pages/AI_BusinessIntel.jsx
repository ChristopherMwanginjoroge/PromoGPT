import React, { useState } from "react";
import api from "../api";

export default function AI_BusinessIntel() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "assistant", text: "Welcome to Business Intelligence. Ask about your sales, growth, products or performance." }
  ]);
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    const query = input;
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/api/intelligence/business/", { query });
      const reply = res.data.reply || "No response";
      setMessages((prev) => [...prev, { from: "assistant", text: reply }]);
    } catch (err) {
      setMessages((prev)=>[
        ...prev,
        { from:"assistant", text:"Business intelligence failed. Try again." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      <h1>Business Intelligence</h1>

      <div className="card" style={{ minHeight: "400px", padding: "20px" }}>
        <div className="int-messages">
          {messages.map((m,i)=>(
            <div key={i} className={`msg ${m.from==="user"?"msg-user":"msg-bot"}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <input
            className="input"
            placeholder="Ask about sales, trends, performance..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={ask}>
            {loading ? "…" : "Ask"}
          </button>
        </div>
      </div>
    </div>
  );
}
