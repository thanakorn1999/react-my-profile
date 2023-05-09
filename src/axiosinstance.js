import axios from "axios";
import Cookies from "js-cookie";

let token = Cookies.get("token");
axios.defaults.headers.common["Authorization"] = token;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3057/API",
  baseURL: SERVER_URL,
  headers: {
    Authorization: token,
  },
});

export default axiosInstance;
