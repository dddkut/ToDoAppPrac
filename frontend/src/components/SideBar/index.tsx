import React from "react";
import styles from "./styles.module.scss";
import { SideBarItem } from "../SideBarItem";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useAppDispatch } from "@/hooks";
import { switchRegisterModal } from "@/features/sideBar/sideBarSlice";

type Props = { isSideBar: boolean };

export const SideBar = ({ isSideBar }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`${styles.sideBarWrapper} ${isSideBar ? styles.isOpen : ""}`}
    >
      <ul>
        <SideBarItem
          Icon={ControlPointIcon}
          onClick={() => dispatch(switchRegisterModal())}
        />
      </ul>
    </nav>
  );
};
