import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiPieChart, FiBox, FiBook, FiCpu, FiUser, FiHelpCircle } from "react-icons/fi";
import "../index.css";

export default function Sidebar(){
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(()=> {
    const el = document.querySelector('.sidebar-container');
    if (expanded) el?.classList.add('expanded'); else el?.classList.remove('expanded');
  }, [expanded]);

  const items = [
    { icon: <FiHome/>, label: "Dashboard", path: "/dashboard" },
    { icon: <FiPieChart/>, label: "Campaigns", path: "/campaigns" },
    { icon: <FiBox/>, label: "Products", path: "/products" },
    { icon: <FiBook/>, label: "Ledger", path: "/ledger" },
    { icon: <FiCpu/>, label: "Generator", path: "/generator" },
    { icon: <FiUser/>, label: "Business Profile", path: "/business-profile" },
    { icon: <FiHelpCircle/>, label: "Support", path: "/support" },
  ];

  return (
    <aside
      className={`sidebar-container`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div>
        <div className="sidebar-header">
          <div className="sidebar-logo">PG</div>
          {expanded && <div className="sidebar-title">PromoGPT</div>}
        </div>

        <nav className="sidebar-menu">
          {items.map(it => (
            <Link
              to={it.path}
              key={it.path}
              className={`menu-item ${location.pathname === it.path ? 'active' : ''}`}
            >
              <div className="icon">{it.icon}</div>
              {expanded && <div style={{fontWeight:600}}>{it.label}</div>}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer card">
        <div style={{fontSize:12, color:"rgba(255,255,255,0.9)"}}>v1.0 • PromoGPT</div>
      </div>
    </aside>
  );
}
