import React, { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import "../styles/SavedPosts.css";

export default function SavedPosts() {
  const { demoMode } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        if (demoMode) {
          setPosts([
            { id: 1, text: "Demo saved campaign post 1." },
            { id: 2, text: "Demo saved product caption 2." },
          ]);
        } else {
          const res = await api.get("/posts/");
          setPosts(res.data || []);
        }
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [demoMode]);

  return (
    <div className="saved-container">
      <h2>Saved Posts</h2>
      <div className="saved-list">
        {posts.map((p) => (
          <div key={p.id} className="saved-card">
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
