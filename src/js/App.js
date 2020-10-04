import React, { Component } from "react";

function App() {
  return (
    <div className="flex flex-col bg-black w-full h-full p-2 pt-4 lg:h-auto lg:max-w-sm">
      <div id="history" className="h-16 text-right text-white">
        14-77/2-3000-1175.5=
      </div>
      <div id="calculation" className="h-32 text-white text-6xl text-right">
        0
      </div>
      <div id="buttons" className="grid grid-cols-4 grid-rows-5  flex-grow">
        <ul className="grid grid-rows-1 grid-cols-3 text-white col-start-1 col-end-4 ">
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-400 text-black">
              AC
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-400 text-black">
              +/-
            </div>
          </li>
        </ul>
        <ul className="grid grid-cols-3 row-start-2 row-end-6 col-start-1 col-end-4 text-white ">
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              1
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              2
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              3
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              4
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              5
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              6
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              7
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              8
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              9
            </div>
          </li>
          <li className="col-start-1 col-end-3">
            <div className="flex justify-start items-center pl-8 h-16 rounded-full bg-gray-900">
              0
            </div>
          </li>
          <li className="col-start-3 col-end-4 ">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-900">
              ,
            </div>
          </li>
        </ul>
        <ul className="grid grid-cols-1 grid-rows-5 row-start-1 row-end-6 text-white ">
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-orange-400">
              &#247;
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-orange-400">
              &#10005;
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-orange-400">
              -
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-orange-400">
              +
            </div>
          </li>
          <li className="">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-orange-400">
              =
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
