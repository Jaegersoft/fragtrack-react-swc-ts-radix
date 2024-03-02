import axios from "axios";

// Create an Axios instance with default configuration
export const apiClient = axios.create({
  baseURL: "https://api.yourdomain.com",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000 // Optional: Set a request timeout in milliseconds
});
