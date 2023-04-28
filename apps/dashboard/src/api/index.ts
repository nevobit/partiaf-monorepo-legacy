import axios from "axios";

export const PARTIAF_API = import.meta.env.MODE == 'development'?  axios.create({
  baseURL: "https://partiaf-api.xyz/api/v3",
}) : axios.create({
  baseURL: "https://partiaf-api.xyz/api/v3",
});
