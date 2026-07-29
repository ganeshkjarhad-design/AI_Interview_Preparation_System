import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
  // You can set other defaults like headers or timeout here
});

export default API;
