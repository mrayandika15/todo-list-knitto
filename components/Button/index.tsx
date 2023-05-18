import React from "react";
import style from "./Button.module.css";
import { IButton } from "./Button.type";
const Button: React.FC<IButton> = ({
  variant,
  children,
  onClick,
  isLoading,
}) => {
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

  if (variant === "danger") {
    className.push(style.danger);
  }

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {isLoading ? <div className={style.spinner} /> : children}
    </button>
  );
};
export default Button;
