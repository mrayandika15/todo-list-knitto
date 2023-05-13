import React from "react";
import style from "./Header.module.css";
import { AiOutlineCheckSquare } from "react-icons/ai";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <AiOutlineCheckSquare />
        <h1>Tasks</h1>
      </div>
    </div>
  );
};

export default Header;
