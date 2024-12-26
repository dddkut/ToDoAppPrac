import { useRouter } from "next/router";
// import { useState } from "react";
import { auth, provider, signInWithPopup } from "../utils/firebase";
// import { User } from "firebase/auth";
import styles from "./styles.module.scss";

export default function Home() {
  const router = useRouter();
  // const [user, setUser] = useState<User>(); //TODO: reduxで管理する

  const logInWithGoogle = async () => {
    try {
      const loginResult = await signInWithPopup(auth, provider);
      const idToken = await loginResult.user.getIdToken();
      // setUser(loginResult.user);　//TODO: reduxで管理する
      localStorage.setItem("token", idToken);
      console.log("logged in successfully");
      // redirect to top screen
      void router.replace("/top");
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <p className={styles.loginText}>Sign In to Start</p>
      <button className={styles.loginButton} onClick={logInWithGoogle}>
        Sign In
      </button>
    </div>
  );
}
