import React, { useState } from "react";
import api from "../api";

export default function AI_Campaign() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const build = async () => {
    if (!goal) return;
    setLoading(true);

    try {
      const res = await api.post("/api/intelligence/campaign/", { goal });
      setPlan(res.data.plan || "No plan was generated.");
    } catch {
      setPlan("Failed to generate campaign.");
    }

    setLoading(false);
  };

  return (
    <div className="page-content">
      <h1>Campaign Builder</h1>

      <div className="card">
        <label>Campaign Goal</label>
        <input
          className="input"
          placeholder="Increase sales for my new perfume…"
          value={goal}
          onChange={(e)=>setGoal(e.target.value)}
        />

        <button className="btn btn-primary" onClick={build} style={{ marginTop:20 }}>
          {loading ? "…" : "Generate Campaign"}
        </button>

        {plan && (
          <div className="card" style={{ marginTop:20 }}>
            <pre style={{ whiteSpace:"pre-wrap" }}>{plan}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
