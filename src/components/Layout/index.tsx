import Head from "next/head";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type layputProps = {
  children: ReactNode;
};

export default function Layout({ children }: layputProps) {
  return (
    <div>
      <Head>
        <title>DicordClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>PRACTICE</h1>
        <img
          src="/images/lizardIcon.svg"
          width={35}
          height={35}
          //className={styles.image}
        />
      </header>
      <main>{children}</main>
    </div>
  );
}
