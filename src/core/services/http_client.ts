import axios from "axios";

const backendClient = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:5173"
    : import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default backendClient;