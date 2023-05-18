import React from "react";
import style from "./ListTodos.module.css";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ITodo } from "@/types";
import Pagination from "./Pagination";
import { useRouter } from "next/router";

type IListTodos = {
  data: ITodo[];
  fetchStrategy: "isr" | "ssr";
};

const ListTodos: React.FC<IListTodos> = ({ data, fetchStrategy }) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const router = useRouter();

  const totalPages = 200 / 10;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (fetchStrategy === "isr") {
      router.push(`/isr-strategy/${(pageNumber - 1) * 10}`);
    }

    if (fetchStrategy === "ssr") {
      router.push(`/ssr-strategy?page=${(pageNumber - 1) * 10}`);
    }
  };

  return (
    <div className={style.container}>
      <table className={style.table__container}>
        <thead>
          <tr>
            <th className={style.table__header}>UserId</th>
            <th className={style.table__header}>Id</th>
            <th className={style.table__header}>Title</th>
            <th className={style.table__header__center}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className={style.table__column}>{item.userId}</td>
              <td className={style.table__column}>{item.id}</td>
              <td className={style.table__column}>{item.title}</td>
              <td className={style.table__column}>
                <div className={style.table__column__completed}>
                  {item.completed ? (
                    <AiFillCheckCircle className={style.icon__completed} />
                  ) : (
                    <AiFillCloseCircle className={style.icon__uncompleted} />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ListTodos;
