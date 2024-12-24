// import { useRouter } from "next/router";
// import { useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../utils/firebase";

export default function Home() {
  // const router = useRouter();

  // useEffect(() => {
  //   void router.replace("/top"); //TODO: Create a login screen.
  // }, []);

  const logInWithGoogle = () => {
    const loginResult = signInWithPopup(auth, provider);
    console.log(loginResult);
  };

  return (
    <div>
      <p>ログイン</p>
      <button onClick={logInWithGoogle}>ログイン</button>
    </div>
  );
}
