import { useRouter } from "next/router";
// import { useState } from "react";
import { auth, provider, signInWithPopup } from "../utils/firebase";
import { useAppSelector, useAppDispatch } from "../hooks";
import { handleSignedIn } from "../features/signIn/signInSlice";
import styles from "./styles.module.scss";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logInWithGoogle = async () => {
    try {
      const loginResult = await signInWithPopup(auth, provider);
      const idToken = await loginResult.user.getIdToken();
      dispatch(handleSignedIn(idToken)); //TODO:後で消す
      console.log("logged in successfully");

      // redirect to top screen
      await router.replace("/top");
    } catch (error) {
      console.error("An Error occured on sign in", error);
    }
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
