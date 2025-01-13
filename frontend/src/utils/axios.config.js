import axios from "axios";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

//activated on server side if api is called from getServerSedeProps
const axiosClient = axios.create({
  //TODO: .envから取得するようにする
  // baseURL:baseURL,
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

// request intercepter
axiosClient.interceptors.request.use(
  async (config) => {
    const waitForUser = () => {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          unsubscribe(); //unsubscribe listener for onAuthStateChanged()
          resolve(user);
        });
      });
    };

    let user = auth.currentUser;
    if (!user) {
      //wait for auth.currentUser
      user = await waitForUser();
    }
    console.log("user:", user);

    if (user) {
      const token = await user.getIdToken(true); // getting latest token
      config.headers["Authorization"] = `Bearer ${token}`;
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
