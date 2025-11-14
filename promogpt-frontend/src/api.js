// src/api.js
import axios from "axios";

// ✅ Base API configuration
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || ".",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically attach JWT if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

// ---------- AUTH SERVICES ----------

// Register user
export const registerUser = async (data) => {
  try {
    const response = await api.post("/users/register/", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Registration failed" };
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const response = await api.post("/users/login/", data);
    // store token for future API calls
    localStorage.setItem("accessToken", response.data.access || response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Login failed" };
  }
};

// Logout user
export const logoutUser = async () => {
  localStorage.removeItem("accessToken");
};

// ---------- AI GENERATION SERVICE ----------

// Generate content
export const generatePromoContent = async (payload) => {
  try {
    const formData = new FormData();
    if (payload.prompt) formData.append("prompt", payload.prompt);
    if (payload.file) formData.append("file", payload.file);

    const response = await api.post("/ai/generate/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Generation failed" };
  }
};
