import { useRouter } from "next/router";
// import { useState } from "react";
import { auth, provider, signInWithPopup } from "../utils/firebase";
// import { User } from "firebase/auth";
import { useAppSelector, useAppDispatch } from "../hooks";
import { handleSignedIn } from "../features/signIn/signInSlice";
import styles from "./styles.module.scss";

export default function Home() {
  const router = useRouter();
  // const [user, setUser] = useState<User>(); //TODO: reduxで管理する
  // const isSignedIn = useAppSelector((state) => state.signIn.isSignedIn);
  // const token = useAppSelector((state) => state.signIn.token);
  const dispatch = useAppDispatch();

  const logInWithGoogle = async () => {
    try {
      const loginResult = await signInWithPopup(auth, provider);
      const idToken = await loginResult.user.getIdToken();
      dispatch(handleSignedIn(idToken));
      console.log(idToken);
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
