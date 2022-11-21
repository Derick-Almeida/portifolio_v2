import axios from "axios";

const BASE_URL = "https://portifolioapi-production.up.railway.app";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});
