import React from "react";
import { connect } from "react-redux";
import {
  CALC_OPERATION_MINUS,
  CALC_OPERATION_PLUS,
  CALC_OPERATION_MULTIPLY,
  CALC_OPERATION_DIVISION,
} from "../constants";
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
  const handleCalculate = () => {
    return 0;
  };
  const handleNegativeMode = () => {
    if (negativeNumberMode === true) {
      disableNegativeNumber();
    } else {
      enableNegativeNumber();
    }
  };
  const modeButtons = [
    {
      label: "AC",
      handler: () => allClear(),
    },
    {
      label: "+/-",
      handler: () => handleNegativeMode(),
    },
  ];
  const numberButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ","];
  const operationButtons = [
    {
      label: String.fromCharCode(247), // &#247;
      handler: () => appendToExpression(CALC_OPERATION_DIVISION),
    },
    {
      label: String.fromCharCode(10005), //  "&#10005;",
      handler: () => appendToExpression(CALC_OPERATION_MULTIPLY),
    },
    {
      label: "-",
      handler: () => appendToExpression(CALC_OPERATION_MINUS),
    },
    {
      label: "+",
      handler: () => appendToExpression(CALC_OPERATION_PLUS),
    },
    {
      label: "=",
      handler: () => handleCalculate(),
    },
  ];

  return (
    <div id="buttons" className="grid grid-cols-4 grid-rows-5 flex-grow">
      <ul className="grid grid-rows-1 grid-cols-3 text-white col-start-1 col-end-4 gap-y-4">
        {modeButtons.map((buttonConf, index) => {
          let bgClassess =
            "bg-gray-400 text-black hover:bg-gray-300 active:bg-gray-500";
          if (buttonConf.label === "+/-" && negativeNumberMode === true) {
            bgClassess =
              "bg-teal-400 text-black hover:bg-teal-300 active:bg-teal-500";
          }
          const cname = `flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline ${bgClassess}`;
          return (
            <li key={index} className="flex justify-center items-center">
              <Btn cname={cname} clickHandler={buttonConf.handler}>
                {buttonConf.label}
              </Btn>
            </li>
          );
        })}
      </ul>
      <ul className="grid grid-cols-3 row-start-2 row-end-6 col-start-1 col-end-4 gap-y-4 text-white ">
        {numberButtons.map((buttonLabel, index) => {
          let liClassName = "flex justify-center items-center";
          let btnCName =
            "flex justify-center items-center w-16 h-16 text-4xl rounded-full bg-gray-800" +
            " focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900";
          if (buttonLabel === 0) {
            liClassName =
              "flex justify-center items-center col-start-1 col-end-3 px-2";
            btnCName =
              "flex justify-start items-center pl-8 w-full h-16 text-4xl rounded-full bg-gray-800" +
              " focus:outline-none focus:shadow-outline hover:bg-gray-700 active:bg-gray-900";
          }
          return (
            <li key={index} className={liClassName}>
              <Btn
                cname={btnCName}
                clickHandler={() => appendToExpression(buttonLabel)}
              >
                {buttonLabel}
              </Btn>
            </li>
          );
        })}
      </ul>
      <ul className="grid grid-cols-1 grid-rows-5 row-start-1 row-end-6 gap-y-4 text-white ">
        {operationButtons.map((buttonConf, index) => {
          const label = buttonConf.label;
          return (
            <li key={index} className="flex justify-end items-center">
              <Btn
                cname="flex justify-center items-center w-16 h-16 text-4xl rounded-full focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-300 active:bg-orange-500"
                clickHandler={buttonConf.handler}
              >
                {label}
              </Btn>
            </li>
          );
        })}
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
