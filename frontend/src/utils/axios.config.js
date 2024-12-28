import axios from "axios";
import { auth } from "./firebase";

//TODO: .envから取得するようにする
// const baseURL = process.env.API_BASE_URL

const axiosInstance = axios.create({
  // baseURL:baseURL,
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

// request intercepter
axios.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(true); // get latest tolken
      config.headers["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token); // saving token in local storage
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response intercepter
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("Session expired");
      auth.signOut();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
