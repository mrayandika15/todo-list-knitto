import React from "react";
import style from "./Button.module.css";
import { IButton } from "./Button.type";
const Button: React.FC<IButton> = ({ variant, children }) => {
  const className = [style.base];

  if (variant === "colored") {
    className.push(style.colored);
  }

  if (variant === "outline") {
    className.push(style.outline);
  }

  if (variant === "unstyled") {
    className.push(style.unstyled);
  }

  return <button className={className.join(" ")}>{children}</button>;
};
export default Button;
