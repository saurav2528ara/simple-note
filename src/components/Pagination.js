import React from 'react';

const Pagination = ({ totalNotes, notesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-4">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-4 py-2 mr-2 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
