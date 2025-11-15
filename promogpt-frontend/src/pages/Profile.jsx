// src/pages/Profile.jsx
import React, { useState } from "react";

const BUSINESS = {
  name: "Sarah's Boutique",
  industry: "Fashion & Accessories",
  location: "Utawala, Nairobi",
  contact: "+254 712 345 678",
  website: "https://sarahsboutique.example",
};

const PERSONAL = {
  name: "Sarah Mwangi",
  email: "sarah@example.com",
  phone: "+254 712 345 678",
  role: "Owner",
};

export default function Profile() {
  const [business, setBusiness] = useState(BUSINESS);
  const [person, setPerson] = useState(PERSONAL);

  return (
    <div style={{ paddingTop: 84, paddingLeft: 26, paddingRight: 26 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Business Profile</h3>
          <div style={{ marginTop: 10 }}>
            <label style={{ fontWeight: 700 }}>Business name</label>
            <input className="input" value={business.name} onChange={e => setBusiness({ ...business, name: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Industry</label>
            <input className="input" value={business.industry} onChange={e => setBusiness({ ...business, industry: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Location</label>
            <input className="input" value={business.location} onChange={e => setBusiness({ ...business, location: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Contact</label>
            <input className="input" value={business.contact} onChange={e => setBusiness({ ...business, contact: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Website</label>
            <input className="input" value={business.website} onChange={e => setBusiness({ ...business, website: e.target.value })} />

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="btn btn-primary">Save Business</button>
              <button className="btn btn-outline">Export</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Personal Profile</h3>
          <div style={{ marginTop: 10 }}>
            <label style={{ fontWeight: 700 }}>Full name</label>
            <input className="input" value={person.name} onChange={e => setPerson({ ...person, name: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Email</label>
            <input className="input" value={person.email} onChange={e => setPerson({ ...person, email: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Phone</label>
            <input className="input" value={person.phone} onChange={e => setPerson({ ...person, phone: e.target.value })} />

            <label style={{ fontWeight: 700, marginTop: 8 }}>Role</label>
            <input className="input" value={person.role} onChange={e => setPerson({ ...person, role: e.target.value })} />

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button className="btn btn-primary">Save Profile</button>
              <button className="btn btn-outline">Delete Account</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14 }} className="card">
        <h3 style={{ marginTop: 0 }}>Business Summary (AI mock)</h3>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800 }}>Monthly Revenue</div>
            <div style={{ color: "rgba(0,0,0,0.6)" }}>KES 1,245,600</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800 }}>Top Product</div>
            <div style={{ color: "rgba(0,0,0,0.6)" }}>Velvet Slip Dress</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800 }}>Recommendation</div>
            <div style={{ color: "rgba(0,0,0,0.6)" }}>Increase weekend promotions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
