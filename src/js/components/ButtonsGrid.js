import React from "react";
import { connect } from "react-redux";
import {
  addHistoryRecord,
  allClear,
  appendToExpression,
  calculateExpression,
  disableNegativeNumber,
  enableNegativeNumber,
} from "../redux/actions";
import Btn from "./Btn";

const ButtonsGrid = ({
  negativeNumberMode,
  appendToExpression,
  enableNegativeNumber,
  disableNegativeNumber,
  addHistoryRecord,
  calculateExpression,
  allClear,
}) => {
  console.log("ButtonsGrid", { negativeNumberMode });
  const handleCalculate = () => {
    return 0;
  };
  const handleAllClear = () => {
    allClear();
  };
  const handleNegativeMode = () => {
    if (negativeNumberMode === true) {
      disableNegativeNumber();
    } else {
      enableNegativeNumber();
    }
  };

  return (
    <div id="buttons" className="grid grid-cols-4 grid-rows-5 flex-grow">
      <ul className="grid grid-rows-1 grid-cols-3 text-white col-start-1 col-end-4 gap-y-4">
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500"
            clickHandler={() => handleAllClear()}
          >
            AC
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500"
            clickHandler={() => handleNegativeMode()}
          >
            +/-
          </Btn>
        </li>
      </ul>
      <ul className="grid grid-cols-3 row-start-2 row-end-6 col-start-1 col-end-4 gap-y-4 text-white ">
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(7)}
          >
            7
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(8)}
          >
            8
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(9)}
          >
            9
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(4)}
          >
            4
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(5)}
          >
            5
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(6)}
          >
            6
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(1)}
          >
            1
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(2)}
          >
            2
          </Btn>
        </li>
        <li className="flex justify-center items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(3)}
          >
            3
          </Btn>
        </li>
        <li className="flex justify-center items-center col-start-1 col-end-3 px-2">
          <Btn
            cname="flex justify-start items-center pl-8 w-full h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(0)}
          >
            0
          </Btn>
        </li>
        <li className="flex justify-center items-center col-start-3 col-end-4 ">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800 focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900"
            clickHandler={() => appendToExpression(",")}
          >
            ,
          </Btn>
        </li>
      </ul>
      <ul className="grid grid-cols-1 grid-rows-5 row-start-1 row-end-6 gap-y-4 text-white ">
        <li className="flex justify-end items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
            clickHandler={() => appendToExpression(CALC_OPERATION_DIVISION)}
          >
            &#247;
          </Btn>
        </li>
        <li className="flex justify-end items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
            clickHandler={() => appendToExpression(CALC_OPERATION_MULTIPLY)}
          >
            &#10005;
          </Btn>
        </li>
        <li className="flex justify-end items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
            clickHandler={() => appendToExpression(CALC_OPERATION_MINUS)}
          >
            -
          </Btn>
        </li>
        <li className="flex justify-end items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
            clickHandler={() => appendToExpression(CALC_OPERATION_PLUS)}
          >
            +
          </Btn>
        </li>
        <li className="flex justify-end items-center">
          <Btn
            cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
            clickHandler={() => handleCalculate()}
          >
            =
          </Btn>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { negativeNumberMode: state.negativeNumberMode };
};

export default connect(mapStateToProps, {
  appendToExpression,
  enableNegativeNumber,
  disableNegativeNumber,
  addHistoryRecord,
  calculateExpression,
  allClear,
})(ButtonsGrid);
