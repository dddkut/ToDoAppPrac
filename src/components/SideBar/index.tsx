import React from "react";
import styles from "./styls.module.scss";
import { sideBarList } from "@/constants/sideBarList";

type Props = { isSideBar: boolean };

export const SideBar = ({ isSideBar }: Props) => {
  return (
    <nav
      className={`${styles.sideBarWrapper} ${isSideBar ? styles.isOpen : ""}`}
    >
      {sideBarList.map((menu) => (
        <div className={styles.sideBarContent}>
          <h4>{menu}</h4>
          <hr className={styles.hrLine} />
        </div>
      ))}
    </nav>
  );
};
