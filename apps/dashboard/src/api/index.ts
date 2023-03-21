import axios from "axios";

export const PARTIAF_API = import.meta.env.MODE == 'development'?  axios.create({
  baseURL: "http://localhost:8000/api/v3",
}) : axios.create({
  baseURL: "https://partiaf-api.xyz/api/v3",
});
