import React from "react";
import Pagination from "../components/Pagination";
import Backbtn from "../components/Backbtn";

const PaginationPage = () => {
  return (
    <div className="p-5">
      <Backbtn />
      <h1 className="text-2xl font-bold text-center mb-5">Pagination</h1>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default PaginationPage;
