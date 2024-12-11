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
          <div className={styles.iconWrapper}>
            <MenuOutlinedIcon
              fontSize="large"
              className={styles.sideBarButton}
              onClick={() => void swichSideBarOpen()}
            />
          </div>
          <div className={styles.centerWrapper}>
            <h1>PRACTICE</h1>
            <img src="/images/lizardIcon.svg" width={35} height={35} />
          </div>
        </header>
      </>
      <main className={styles.main}>
        <SideBar isSideBar={isSideBar} />
        {children}
      </main>
    </div>
  );
};
