import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-backend-8t9e.onrender.com/",
});
