import React from "react";
import styles from "./styls.module.scss";
// import { sideBarList } from "@/constants/sideBarList";
import { sideBarItems } from "@/constants/sidebarItems";
import Link from "next/link";

type Props = { isSideBar: boolean };

export const SideBar = ({ isSideBar }: Props) => {
  return (
    <nav
      className={`${styles.sideBarWrapper} ${isSideBar ? styles.isOpen : ""}`}
    >
      <ul>
        {sideBarItems.map((sideBarItem) => (
          <li className={styles.sideBarItem}>
            {/* <div className={styles.sideBarContent}> */}
            <img src={sideBarItem.icon} className={styles.itemIcon}></img>
            <Link href={sideBarItem.path} className={styles.itemName}>
              {sideBarItem.name}
            </Link>
            <hr className={styles.hrLine} />
            {/* </div> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};
