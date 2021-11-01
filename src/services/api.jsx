import axios from "axios";

const api = axios.create({
  baseUrl: "https://kenziehamburgers.herokuapp.com/",
});

export default api;
