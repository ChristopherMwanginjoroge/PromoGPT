import React, { useState } from "react";
import api from "../api";
import "../index.css";

export default function AI_Chat() {
  const [messages, setMessages] = useState([
    { from: "assistant", text: "How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input.trim()) return;

    const userText = input;
    setMessages([...messages, { from: "user", text: userText }]);
    setInput("");

    try {
      const res = await api.post("/api/intelligence/chat/", { query: userText });
      setMessages((m)=>[...m, { from:"assistant", text: res.data.reply }]);
    } catch {
      setMessages((m)=>[...m, { from:"assistant",
        text:"Failed to get response. Try again." }]);
    }
  };

  return (
    <div className="page-content">
      <h1>Intelligence</h1>

      <div className="card" style={{ padding: 30 }}>
        <div className="int-messages">
          {messages.map((m,i)=>(
            <div key={i} className={`msg ${m.from === "user" ? "msg-user" : "msg-bot"}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div style={{ display:"flex", gap:10, marginTop:20 }}>
          <input
            className="input"
            placeholder="Ask anything..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}
