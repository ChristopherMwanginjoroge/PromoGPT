import React, { useState } from "react";
import api from "../api";

export default function AI_Content() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!topic) return alert("Enter a topic");
    setLoading(true);

    try {
      const res = await api.post("/api/intelligence/content/", { topic });
      setResult(res.data.text || "No result");
    } catch (e) {
      setResult("Content generation failed.");
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      <h1>Content Generator</h1>

      <div className="card">
        <label>Topic / Idea</label>
        <input
          className="input"
          placeholder="e.g. Promote my new shoe collection"
          value={topic}
          onChange={(e)=>setTopic(e.target.value)}
        />

        <button className="btn btn-primary" style={{ marginTop:20 }} onClick={generate}>
          {loading ? "…" : "Generate Content"}
        </button>

        {result && (
          <div className="card" style={{ marginTop:20 }}>
            <pre style={{ whiteSpace:"pre-wrap" }}>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
