import axios from "axios";

export const Api2 = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com/",
  timeout: 4000,
});
