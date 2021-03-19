import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/form-test/",
  // baseURL: "http://172.17.0.2:8000/api/form-test/",
});

export default api;
