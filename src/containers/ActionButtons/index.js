import { Button } from "@/components";
import React from "react";
import style from "./ActionButtons.module.css";

const ActionButtons = () => {
  return (
    <div className={style.container}>
      <Button type="outlined">Filter</Button>
      <Button type="outlined">Sort</Button>
      <Button type="primary">New</Button>
    </div>
  );
};

export default ActionButtons;
