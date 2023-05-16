import React from "react";
import style from "./Drawer.module.css";

type IDrawerProps = {
  children: React.ReactNode;
};

const Drawer: React.FC<IDrawerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Drawer;
