import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", 
  // or your production URL: "https://your-backend-host.com"
  withCredentials: true, // important for future auth
});

export default api;
