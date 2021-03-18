import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.0.2:8000/api/form-test/",
});

export default api;
