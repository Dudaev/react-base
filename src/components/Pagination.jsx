import React from "react";
import getPagesArray from "../utils/pages";

function Pagination({ totalPages, currentPage, setPage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pagination">
      {pagesArray.map((page) => (
        <span
          className={page === currentPage ? "page page__current" : "page"}
          onClick={() => setPage(page)}
          key={page}
        >
          {page}
        </span>
      ))}
    </div>
  );
}

export default Pagination;
