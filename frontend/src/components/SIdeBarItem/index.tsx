import React from "react";
import styles from "./styles.module.scss";
// import { SideBarItem } from "@/types/sideBarMenu";

type Props = {
  name: string;
  path: string;
  Icon: React.ComponentType;
};

export const SideBarItem = ({ name, path, Icon }: Props) => {
  return (
    <li className={styles.sideBarItem}>
      <div className={styles.itemIcon}>
        <Icon />
      </div>
      {/* <Link href={sideBarItem.path} className={styles.itemName}>
  {sideBarItem.name}
</Link> */}
      {/* <hr className={styles.hrLine} /> */}
    </li>
  );
};
