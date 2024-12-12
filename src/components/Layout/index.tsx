import Head from "next/head";
import { ReactNode, useState } from "react";
import styles from "./styles.module.scss";
import { SideBar } from "../SideBar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [isSideBar, setIsSideBar] = useState(false);

  const swichSideBarOpen = () => {
    setIsSideBar(!isSideBar);
  };

  return (
    <div>
      <Head>
        <title>DicordClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <header className={styles.header}>
          <div className={styles.buttonWrapper}>
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
