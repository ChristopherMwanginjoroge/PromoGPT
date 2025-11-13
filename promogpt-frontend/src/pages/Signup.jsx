// // src/pages/Signup.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api";
// import { useAuth } from "../contexts/AuthContext";
// import BrandMark from "../components/BrandMark";

// export default function Signup() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ first_name: "", last_name: "", email: "", password: "", phone: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const res = await api.post("/users/register/", form);
//       // backend may return { user, access } or similar — try common keys
//       const user = res.data.user || res.data;
//       const access = res.data.access || res.data.token || res.data.access_token;
//       login(user, access);
//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.error || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <BrandMark size="lg" stacked />
//         <h2>Create your PromoGPT account</h2>
//         {error && <div className="alert alert--error">{error}</div>}
//         <form onSubmit={handleSubmit} className="form">
//           <div className="form__row">
//             <input required placeholder="First name" value={form.first_name} onChange={update("first_name")} />
//             <input required placeholder="Last name" value={form.last_name} onChange={update("last_name")} />
//           </div>
//           <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} />
//           <input required type="tel" placeholder="Phone" value={form.phone} onChange={update("phone")} />
//           <input required type="password" minLength={8} placeholder="Password" value={form.password} onChange={update("password")} />
//           <button className="btn btn--primary" type="submit" disabled={loading}>{loading ? "Creating..." : "Sign up"}</button>
//         </form>
//         <p>Already have an account? <button className="link-button" onClick={() => navigate("/login")}>Login</button></p>
//       </div>
//     </div>
//   );
// }
// src/pages/Signup.jsx
// src/pages/Signup.jsx




// src/pages/Signup.jsx
import React, { useState } from "react";
import { Box, Input, Button, Heading, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const { login } = useAuth();
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/register/", form);
      const user = res.data.user || res.data;
      const access = res.data.access || res.data.token;
      login(user, access);
      navigate("/dashboard");
    } catch {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minH="100vh" bg="gray.50">
      <VStack spacing={4} p={8} bg="white" borderRadius="md" shadow="md" w="sm">
        <Heading color="brand.purple">Sign Up</Heading>
        {error && <Text color="red.500">{error}</Text>}
        <Input placeholder="First Name" value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })}/>
        <Input placeholder="Last Name" value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })}/>
        <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}/>
        <Input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <Button colorScheme="purple" w="full" onClick={handleSubmit}>Sign Up</Button>
        <Text fontSize="sm">Already have an account? <Button variant="link" onClick={() => navigate("/login")}>Login</Button></Text>
      </VStack>
    </Box>
  );
}
