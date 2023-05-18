import React, { useEffect } from "react";
import style from "./CreateTodos.module.css";
import { Button, Input, Notification } from "@/components";
import { Drawer } from "@/components";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateTodosMutation } from "@/services/todosApi";
import { ITodo } from "@/types";

const CreateTodos = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const [isNotification, setIsNotification] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<ITodo | {}>({});

  const handleOnChanges = (name: string, values: string | boolean) => {
    const transformBoolean: boolean | string =
      values === "True" ? true : values === "False" ? false : values;

    setValue((prevState) => ({
      ...prevState,
      [name]: transformBoolean,
      userId: 1,
    }));
  };

  const [createMutations, { isLoading }] = useCreateTodosMutation();

  const handleSubmitButton = () => {
    createMutations(value).then(() => {
      setIsDrawerOpen(false);
      setIsNotification(true);
      setValue({});
    });
  };

  return (
    <div className={style.container}>
      <Notification
        isVisible={isNotification}
        onClose={() => setIsNotification(false)}
      >
        Successfully Created 🚀
      </Notification>

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
            <Input
              variants="base"
              label="Title"
              onChange={(e) => handleOnChanges("title", e.target.value)}
            />
            <Input
              variants="select"
              options={["True", "False"]}
              label="Completed"
              onChange={(e) => handleOnChanges("completed", e.target.value)}
            />
          </div>

          <div className={style.form__action__buttons}>
            <Button variant="danger" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="colored"
              onClick={handleSubmitButton}
              isLoading={isLoading}
            >
              Submit
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CreateTodos;
