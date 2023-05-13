import React from "react";

import style from "./Button.module.css";

const Button = ({ children, type }) => {
  const className = [];

  if (type === "primary") {
    className.push(style.primary);
  }

  if (type === "outlined") {
    className.push(style.outlined);
  }

  return <button className={className.join(" ")}>{children}</button>;
};

export default Button;
