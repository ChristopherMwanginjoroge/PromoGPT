import React, { useState } from "react";
import api from "../api";

export default function AI_Ads() {
  const [idea, setIdea] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!idea) return;
    setLoading(true);

    try {
      const res = await api.post("/api/intelligence/ads/", { idea });
      setScript(res.data.script || "No ad script generated.");
    } catch(err) {
      setScript("Failed to generate ad script.");
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      <h1>Ad Creator</h1>

      <div className="card">
        <label>Ad Concept</label>
        <input
          className="input"
          placeholder="e.g. A 30-second video ad for my new skincare oil"
          value={idea}
          onChange={(e)=>setIdea(e.target.value)}
        />

        <button className="btn btn-primary" onClick={generate} style={{ marginTop:20 }}>
          {loading ? "…" : "Generate Script"}
        </button>

        {script && (
          <div className="card" style={{ marginTop:20 }}>
            <pre style={{ whiteSpace:"pre-wrap" }}>{script}</pre>
          </div>
        )}
      </div>

      <div className="card" style={{ marginTop:20 }}>
        <h3>Next Steps</h3>
        <p className="small-muted">You can automatically pass this script to:</p>
        
        <button className="btn btn-outline" style={{ marginTop:8 }}>
          Generate Voice (ElevenLabs)
        </button>

        <button className="btn btn-outline" style={{ marginTop:8 }}>
          Generate Video (HeyGen)
        </button>

        <button className="btn btn-outline" style={{ marginTop:8 }}>
          Generate Image
        </button>
      </div>
    </div>
  );
}
