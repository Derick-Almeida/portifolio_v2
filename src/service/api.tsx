import axios from "axios";

const BASE_URL = "https://portifolioapi-production.up.railway.app";

export const publicRoute = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const privateRoute = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Portifolio:token") as string)}`,
  },
  timeout: 15000,
});
