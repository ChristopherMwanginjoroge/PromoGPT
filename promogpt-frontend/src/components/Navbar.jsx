import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const pageTitles = {
    "/": "Login",
    "/login": "Login",
    "/register": "Create Account",
    "/demo": "Demo Mode",
    "/dashboard": "Dashboard",
    "/ledger": "Financial Ledger",
    "/products": "Product Management",
    "/intelligence": "AI Intelligence",
    "/profile": "Your Profile",
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "PromoGPT";

  return (
    <header className="navbar">
      <h1 className="navbar-title">{title}</h1>

      <div className="navbar-right">
        <Link to="/profile" className="navbar-profile">
          <img
            src="https://ui-avatars.com/api/?name=User"
            alt="User Avatar"
            className="avatar"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
