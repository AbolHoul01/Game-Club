import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4496e510e05942adaf79739228308f0a",
  },
  timeout: 120000,
});
