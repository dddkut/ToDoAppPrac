import React from "react";
import styles from "./styles.module.scss";
import { sideBarItems } from "@/constants/sidebarItems";
// import Link from "next/link";
import { SideBarItem } from "../SIdeBarItem";

type Props = { isSideBar: boolean };

export const SideBar = ({ isSideBar }: Props) => {
  return (
    <nav
      className={`${styles.sideBarWrapper} ${isSideBar ? styles.isOpen : ""}`}
    >
      <ul>
        {sideBarItems.map((sideBarItem) => (
          // <li className={styles.sideBarItem}>
          //   <sideBarItem.icon className={styles.itemIcon} />
          //   <Link href={sideBarItem.path} className={styles.itemName}>
          //     {sideBarItem.name}
          //   </Link>
          //   <hr className={styles.hrLine} />
          // </li>
          <SideBarItem {...sideBarItem} />
        ))}
      </ul>
    </nav>
  );
};
