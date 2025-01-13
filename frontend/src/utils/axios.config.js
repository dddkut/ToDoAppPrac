import axios from "axios";
import { auth } from "./firebase";

//TODO: .envから取得するようにする
// const baseURL = process.env.API_BASE_URL

//activated on server side if api is called from getServerSedeProps
const axiosClient = axios.create({
  // baseURL:baseURL,
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

// request intercepter
axiosClient.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    console.log("user:", user);
    if (user) {
      const token = await user.getIdToken(true); // getting latest token
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(token);
      // localStorage.setItem("token", token); // saving token to local storage
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response intercepter
axiosClient.interceptors.response.use(
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

export default axiosClient;
