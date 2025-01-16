import React from "react";
import styles from "./styles.module.scss";

type Props = {
  Icon: React.ComponentType;
  onClick: () => void;
};

export const SideBarItem = ({ Icon, onClick }: Props) => {
  return (
    <li className={styles.sideBarItem}>
      <div className={styles.itemIcon} onClick={onClick}>
        <Icon />
      </div>
    </li>
  );
};
