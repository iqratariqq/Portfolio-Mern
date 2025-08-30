import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-mern-beta.vercel.app", 
  withCredentials: true,
});

export default api;