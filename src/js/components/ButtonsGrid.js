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
import { selectCurrentTheme } from "../redux/selectors";
import Btn from "./Btn";

const ButtonsGrid = ({
  theme,
  negativeNumberMode,
  appendToExpression,
  enableNegativeNumber,
  disableNegativeNumber,
  addHistoryRecord,
  calculateExpression,
  allClear,
}) => {
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
      label: String.fromCharCode(10005), // &#10005;
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
      handler: () => calculateExpression(),
    },
  ];

  return (
    <div
      id="buttons"
      className="grid grid-cols-4 grid-rows-5 flex-grow mb-16 mx-6"
    >
      <ul className="grid grid-rows-1 grid-cols-3 col-start-1 col-end-4 gap-2">
        {modeButtons.map((buttonConf, index) => {
          let bgClassess = `${theme.systemButtons.backgroundColor} ${theme.systemButtons.fontColor} ${theme.systemButtons.hover.backgroundColor} ${theme.systemButtons.active.backgroundColor}`;
          if (buttonConf.label === "+/-" && negativeNumberMode === true) {
            bgClassess = `${theme.systemButtonsActive.backgroundColor} ${theme.systemButtonsActive.fontColor} ${theme.systemButtonsActive.hover.backgroundColor} ${theme.systemButtonsActive.active.backgroundColor}`;
          }
          const cname = `flex justify-center items-center w-10 h-10 text-xl rounded-full focus:outline-none focus:shadow-outline ${bgClassess}`;
          return (
            <li key={index} className="flex justify-center items-center">
              <Btn cname={cname} clickHandler={buttonConf.handler}>
                {buttonConf.label}
              </Btn>
            </li>
          );
        })}
      </ul>
      <ul className="grid grid-cols-3 row-start-2 row-end-6 col-start-1 col-end-4 gap-3">
        {numberButtons.map((buttonLabel, index) => {
          let liClassName = "flex justify-center items-center";
          let btnThemeClasses = `${theme.numberButtons.fontColor} ${theme.numberButtons.backgroundColor} ${theme.numberButtons.hover.backgroundColor} ${theme.numberButtons.active.backgroundColor}`;
          let btnCName =
            `flex justify-center items-center w-10 h-10 text-xl rounded-full ` +
            ` focus:outline-none focus:shadow-outline ${btnThemeClasses}`;
          if (buttonLabel === 0) {
            liClassName =
              "flex justify-center items-center col-start-1 col-end-3 px-2";
            btnCName =
              "flex justify-start items-center pl-8 w-48 h-10 text-xl rounded-full" +
              ` focus:outline-none focus:shadow-outline ${btnThemeClasses}`;
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
      <ul className="grid grid-cols-1 grid-rows-5 row-start-1 row-end-6 gap-2 ">
        {operationButtons.map((buttonConf, index) => {
          const label = buttonConf.label;
          const operBtnCName = `flex justify-center items-center w-10 h-10 text-xl rounded-full focus:outline-none focus:shadow-outline ${theme.operationsButtons.fontColor} ${theme.operationsButtons.backgroundColor} ${theme.operationsButtons.hover.backgroundColor} ${theme.operationsButtons.active.backgroundColor}`;
          return (
            <li key={index} className="flex justify-end items-center">
              <Btn cname={operBtnCName} clickHandler={buttonConf.handler}>
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
  const currentTheme = selectCurrentTheme(state);
  return {
    theme: currentTheme,
    negativeNumberMode: state.negativeNumberMode,
  };
};

export default connect(mapStateToProps, {
  appendToExpression,
  enableNegativeNumber,
  disableNegativeNumber,
  addHistoryRecord,
  calculateExpression,
  allClear,
})(ButtonsGrid);
