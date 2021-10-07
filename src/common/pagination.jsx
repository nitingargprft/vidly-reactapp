import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  console.log("Current Selected Page=" + currentPage);
  return (
    <div>
      <h1>Total Number Of Movies Found : {itemCount}</h1>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
