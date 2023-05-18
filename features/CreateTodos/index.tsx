import React, { useEffect } from "react";
import style from "./CreateTodos.module.css";
import { Button, Input } from "@/components";
import { Drawer } from "@/components";
import { AiOutlineClose } from "react-icons/ai";

const CreateTodos = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  return (
    <div className={style.container}>
      <Button
        variant="colored"
        onClick={(e) => {
          e.stopPropagation();
          setIsDrawerOpen((prevState) => !prevState);
        }}
      >
        New
      </Button>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className={style.form__container}>
          <div className={style.form__header__container}>
            <div className={style.form__header}>Create Task</div>
            <AiOutlineClose
              className={style.form__close__icon}
              onClick={() => setIsDrawerOpen(false)}
            />
          </div>

          <div className={style.form__content}>
            <Input variants="base" label="Title" />
            <Input
              variants="select"
              options={["True", "False"]}
              label="Completed"
            />
          </div>

          <div className={style.form__action__buttons}>
            <Button variant="danger" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </Button>
            <Button variant="colored">Submit</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CreateTodos;
