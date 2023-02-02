import React, { useState } from "react";
import Item from "./Item";
import "./Carousel.css";
const Carousel = (props) => {
  console.log(props);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = props.data.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  let arr = [];
  for (const record of currentRecords) {
    arr.push(<Item data={record} key={record.id}></Item>);
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {arr}
      <button
        className="prev"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          className="numbering-button"
          key={number}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="next"
        onClick={handleNextPage}
        disabled={currentPage * recordsPerPage >= props.data.length}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
