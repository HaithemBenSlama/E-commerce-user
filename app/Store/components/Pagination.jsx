import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "@/components/Card";
import { dataStore } from "../variables/data";

const items = dataStore;
function Items({ currentItems, refresh, setRefresh }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.p_id} className="w-full">
            <Card
              data={item}
              refreshCart={refresh}
              setRefreshCart={setRefresh}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, refresh, setRefresh }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = Math.min(itemOffset + itemsPerPage, items.length);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    setItemStart(newOffset + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from{" "}
          <span className="font-bold text-gray-900">{itemStart}</span> to{" "}
          <span className="font-bold text-gray-900">{endOffset}</span> of{" "}
          <span className="font-bold text-gray-900">{items.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
