import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//TODO: 値は環境変数に入れる？
const firebaseConfig = {
  apiKey: "AIzaSyCcNvtbrWH-FZghmyDtordXbM_5d0vyeoM",
  authDomain: "todo-portfolio-239f6.firebaseapp.com",
  projectId: "todo-portfolio-239f6",
  storageBucket: "todo-portfolio-239f6.firebasestorage.app",
  messagingSenderId: "1089028161843",
  appId: "1:1089028161843:web:ae6563d33ebc3bf470be46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
