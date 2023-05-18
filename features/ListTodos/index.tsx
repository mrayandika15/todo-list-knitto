import React from "react";
import style from "./ListTodos.module.css";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ITodo } from "@/types";
import Pagination from "./Pagination";

type IListTodos = {
  data: ITodo[];
};

const ListTodos: React.FC<IListTodos> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Perform any additional logic or API calls based on the selected page number
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
          {data?.map((item) => (
            <tr>
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
