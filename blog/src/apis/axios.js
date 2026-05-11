import axios from "axios";

const api = axios.create({
  baseURL: "https://blog.vadivelbabu.in",
});
api.defaults.headers.post["Content-Type"] = "application/json";
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
