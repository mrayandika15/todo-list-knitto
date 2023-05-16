import React from "react";
import style from "./CreateTodos.module.css";
import { Button } from "@/components";

const CreateTodos = () => {
  return (
    <div className={style.container}>
      <Button variant="colored">New</Button>
    </div>
  );
};

export default CreateTodos;
