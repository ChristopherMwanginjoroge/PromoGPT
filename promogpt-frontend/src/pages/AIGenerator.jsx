import React, { useState } from "react";

export default function AIGenerator() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const agents = [
    "Business Intelligence",
    "Content Generator",
    "Campaign Builder",
    "Ad Generator"
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Processing your request..." }
      ]);
    }, 600);
  };

  return (
    <div className="ai-chat-container">
      <div className="agent-list">
        <h3>AI Agents</h3>
        {agents.map((a) => (
          <div className="agent-tile" key={a}>
            {a}
          </div>
        ))}
      </div>

      <div className="chat-area">
        <h2>How can I help you today?</h2>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-message ${msg.from === "user" ? "chat-user" : "chat-bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here…"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
