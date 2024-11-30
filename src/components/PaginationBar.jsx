import React from 'react';

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination  flex justify-center items-center space-x-2 my-4 2xs:space-x-0">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 2xs:px-2 2xs:py-1  bg-gray-300 rounded disabled:opacity-50"
            >
                &#x2770;
            </button>

            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-4 py-2 2xs:px-2 2xs:py-1 ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"} rounded`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 2xs:px-2 2xs:py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                &#x2771;

            </button>
        </div>
    );
};

export default PaginationBar;
