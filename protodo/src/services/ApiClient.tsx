import axios from "axios";

const API_BASE_URL = "http://localhost:5291"; // Replace with your actual API URL

const ApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiClient;
