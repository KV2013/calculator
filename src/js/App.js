import React from "react";
import Btn from "./components/Btn";

function App() {
  return (
    <div className="flex flex-col bg-black w-full h-full p-6 pt-10 lg:h-auto lg:max-w-sm">
      <div id="history" className="h-16 text-right text-white">
        14-77/2-3000-1175.5=
      </div>
      <div id="calculation" className="h-32 text-white text-6xl text-right">
        0
      </div>
      <div id="buttons" className="grid grid-cols-4 grid-rows-5 flex-grow">
        <ul className="grid grid-rows-1 grid-cols-3 text-white col-start-1 col-end-4 gap-y-4">
          <li className="flex justify-center items-center">
            <Btn
              cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500"
              clickHandler={() => console.log("AC")}
            >
              AC
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500">
              +/-
            </Btn>
          </li>
        </ul>
        <ul className="grid grid-cols-3 row-start-2 row-end-6 col-start-1 col-end-4 gap-y-4 text-white ">
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              7
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              8
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              9
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              4
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              5
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              6
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              1
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              2
            </Btn>
          </li>
          <li className="flex justify-center items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              3
            </Btn>
          </li>
          <li className="flex justify-center items-center col-start-1 col-end-3 px-2">
            <Btn cname="flex justify-start items-center pl-8 w-full h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              0
            </Btn>
          </li>
          <li className="flex justify-center items-center col-start-3 col-end-4 ">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900">
              ,
            </Btn>
          </li>
        </ul>
        <ul className="grid grid-cols-1 grid-rows-5 row-start-1 row-end-6 gap-y-4 text-white ">
          <li className="flex justify-end items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500">
              &#247;
            </Btn>
          </li>
          <li className="flex justify-end items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500">
              &#10005;
            </Btn>
          </li>
          <li className="flex justify-end items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500">
              -
            </Btn>
          </li>
          <li className="flex justify-end items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500">
              +
            </Btn>
          </li>
          <li className="flex justify-end items-center">
            <Btn cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500">
              =
            </Btn>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
