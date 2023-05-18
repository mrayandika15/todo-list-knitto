import React from "react";
import style from "./Input.module.css";
import { IInput } from "./Input.type";

const Input: React.FC<IInput> = ({ label, variants, options }) => {
  return (
    <div className={style.container}>
      <div className={style.label}>{label}</div>
      {variants === "base" ? <input className={style.input} /> : null}

      {variants === "select" ? (
        <select className={style.input}>
          {options?.map((item: string) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default Input;
