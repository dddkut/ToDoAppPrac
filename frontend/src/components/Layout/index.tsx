import Head from "next/head";
import { ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { SideBar } from "../SideBar";
import { auth, signOut } from "../../utils/firebase";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [isSideBar, setIsSideBar] = useState(false);

  const swichSideBarOpen = () => {
    setIsSideBar(!isSideBar);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // setUser(null);  //TODO:reduxで管理する
      localStorage.removeItem("token");
      console.log("logged out");
      // redirect to sign in screen
      void router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>DicordClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <header className={styles.header}>
          <div className={styles.sideBarButtonWrapper}>
            <MenuOutlinedIcon
              fontSize="large"
              className={styles.sideBarButton}
              onClick={() => void swichSideBarOpen()}
            />
          </div>
          <div className={styles.titleWrapper}>
            <img src="/images/lizardIcon.svg" width={35} height={35} />
            <h1>PRACTICE</h1>
          </div>
          <div className={styles.logOutWrapper}>
            <button className={styles.logOutButton} onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </header>
      </>
      <main className={styles.main}>
        <SideBar isSideBar={isSideBar} />
        <div
          className={`${styles.mainContent} ${
            isSideBar ? styles.sideBarOpen : ""
          }`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
