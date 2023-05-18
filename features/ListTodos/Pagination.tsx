import React from "react";
import style from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  console.log(Array.from({ length: totalPages }, (_, i) => i + 1));

  return (
    <div className={style.container}>
      <nav>
        <ul className={style.content}>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={
                  currentPage === pageNumber
                    ? style.pagination__button__active
                    : style.pagination__button__disabled
                }
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
