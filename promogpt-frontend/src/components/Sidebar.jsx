import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBook,
  FiBox,
  FiCpu,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiMenu,
} from "react-icons/fi";
import "../index.css";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // add/remove expanded class for CSS transitions
  useEffect(() => {
    const el = document.querySelector(".sidebar-container");
    if (expanded) el?.classList.add("expanded");
    else el?.classList.remove("expanded");
  }, [expanded]);

  const items = [
    { icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
    { icon: <FiBook />, label: "Ledger", path: "/ledger" },
    { icon: <FiBox />, label: "Business Data", path: "/business-data" },
    { icon: <FiCpu />, label: "Intelligence", path: "/intelligence" },
    { icon: <FiUser />, label: "Profile", path: "/profile" },
    { icon: <FiSettings />, label: "Settings", path: "/settings" },
    { icon: <FiHelpCircle />, label: "Support", path: "/support" },
  ];

  return (
    <>
      {/* Tiny always-visible tab at left top to hover */}
      <div
        className="sidebar-tab"
        onMouseEnter={() => setExpanded(true)}
        onFocus={() => setExpanded(true)}
      >
        <FiMenu size={20} color="#fff" />
      </div>

      <aside
        className="sidebar-container"
        onMouseLeave={() => setExpanded(false)}
        // allow click inside to keep open
      >
        <div>
          <div className="sidebar-header">
            <div className="sidebar-logo">PG</div>
            {expanded && <div className="sidebar-title">PromoGPT</div>}
          </div>

          <nav className="sidebar-menu">
            {items.map((it) => (
              <Link
                to={it.path}
                key={it.path}
                className={`menu-item ${
                  location.pathname === it.path ? "active" : ""
                }`}
              >
                <div className="icon">{it.icon}</div>
                {expanded && <div className="item-label">{it.label}</div>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="footer-version">v1.0 • PromoGPT</div>
        </div>
      </aside>
    </>
  );
}
