import React from "react";
import style from "./Header.module.css";
import { RiTaskLine } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <RiTaskLine className={style.icon} />
      <div className={style.text}>Tasks</div>
    </div>
  );
};

export default Header;
