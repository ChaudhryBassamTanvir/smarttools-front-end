"use client";

import { BsSearch } from "react-icons/bs";

import React, { useState } from "react";

const SearchComponent = () => {
 

  return (
    <>
<div className="ml-0 mt-2 border border-[#1D1D5DB] rounded-lg h-auto sm:h-16 w-full sm:w-[100%] md:w-[100%] flex flex-col sm:flex-row items-center bg-white p-2 sm:p-0">
  <input
    className="border-gray-300 border ml-1 p-2 pl-3 rounded-lg w-full sm:w-3/5 mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
    type="text"
    placeholder="What are you finding?"
  />
  <select
    className="border-gray-300 border p-2 pl-3 rounded-lg w-full sm:w-2/5 mb-2 sm:mb-0 sm:ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="" disabled selected hidden>In Where?</option>
    <option value="category1" className="text-lg black rounded-lg pb-3 pt-3">Category 1</option>
    <option value="category2" className="text-lg black rounded-lg pb-3 pt-3" >Category 2</option>
  </select>
  <button
    className="p-2 bg-red-500 text-white mr-1 rounded-lg flex items-center justify-center w-full sm:w-auto sm:ml-2 focus:outline-none focus:ring-2 focus:ring-red-600"
  >
    <i className="fa fa-search mr-2"></i>Search
  </button>
</div>



    </>
  );
};

export default SearchComponent;
