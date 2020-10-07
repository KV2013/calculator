import {
  CALC_OPERATION_MINUS,
  CALC_OPERATION_PLUS,
  CALC_OPERATION_MULTIPLY,
  CALC_OPERATION_DIVISION,
  NEGATIVE_NUMBER_MODE_DISABLED,
  NEGATIVE_NUMBER_MODE_ENABLED,
  DECIMAL_SIGN,
} from "../constants";
import CalcNumber from "./CalcNumber";

/**
 * Return true when division by zero is atempted
 * @param {Array} stack
 * @param {String|null} input if null function will check last two items from stack
 * @returns bool
 */
function guardDivisionByZero(stack, input = null) {
  if (stack.length <= 1) {
    return false;
  }

  const prevItem = tail(stack, 1)[0];
  if (prevItem === CALC_OPERATION_DIVISION && String(input) === "0") {
    return true;
  }

  if (input === null) {
    const lastTwoItems = tail(stack, 2);
    if (lastTwoItems[0] === CALC_OPERATION_DIVISION) {
      const calcNum = CalcNumber.parseInstance(lastTwoItems[1]);
      if (calcNum.getNumber() === 0) {
        return true;
      }
    }
  }

  return false;
}

function isStackContainsResult(stack) {
  let stackContainsResult = false;
  let prevItem = tail(stack, 1)[0];
  const calcNumber = isCalcOperation(prevItem)
    ? false
    : CalcNumber.parseInstance(prevItem);
  if (calcNumber) {
    stackContainsResult = calcNumber.isCalculated;
  }
}

function replaceLastItem(stack, newItem) {
  const newStack = stack.slice(0, stack.length - 1);
  newStack.push(newItem);
  return newStack;
}

function tail(stack, len) {
  const start = stack.length - len;
  return stack.slice(start, stack.length);
}

function appendCalcOperation(stack, input, isNegative) {
  if (stack.length === 0) {
    return stack;
  }
  let prevItem = tail(stack, 1)[0];

  if (isCalcOperation(prevItem)) {
    const newStack = stack.slice(0, stack.length - 1);
    newStack.push(input);
    return newStack;
  }

  prevItem = JSON.parse(prevItem);
  const calcNumber = new CalcNumber(prevItem.value, prevItem.isNegative);

  if (calcNumber.hasEmptyFraction()) {
    calcNumber.removeFraction();
    let newStack = replaceLastItem(stack, JSON.stringify(calcNumber));
    return [...newStack, input];
  }

  return [...stack, input];
}

function appendNumber(stack, input, isNegative) {
  let calcNumber;

  if (stack.length === 0) {
    const val = input === "" ? 0 : input;
    calcNumber = new CalcNumber(val, isNegative);
    const newStack = stack.slice();
    newStack.push(JSON.stringify(calcNumber));
    return newStack;
  }

  if (isCalcOperation(stack[stack.length - 1])) {
    calcNumber = new CalcNumber(input, isNegative);
    return [...stack, JSON.stringify(calcNumber)];
  }

  const prevNumber = JSON.parse(stack[stack.length - 1]);
  calcNumber = new CalcNumber(prevNumber.value, isNegative);

  if (input === DECIMAL_SIGN && calcNumber.isFloat()) {
    calcNumber.removeFraction();
    return replaceLastItem(stack, JSON.stringify(calcNumber));
  }

  calcNumber.append(input);
  return replaceLastItem(stack, JSON.stringify(calcNumber));
}

function isNegativeNumber(item) {
  if (isCalcOperation(item)) {
    return false;
  }
  const numberData = JSON.parse(item);
  const calcNumber = new CalcNumber(numberData.value, numberData.isNegative);
  return calcNumber.isNegative;
}

function isPlusSign(item) {
  if (!isCalcOperation(item)) {
    return false;
  }
  return item === CALC_OPERATION_PLUS;
}

function isMinusSign(item) {
  if (!isCalcOperation(item)) {
    return false;
  }
  return item === CALC_OPERATION_MINUS;
}

export function parseExpressionStack(stack, toCalculate = false) {
  if (stack.length === 0) {
    return "0";
  }
  return stack
    .map((item, index, stack) => {
      if (
        isPlusSign(item) &&
        stack[index + 1] &&
        isNegativeNumber(stack[index + 1])
      ) {
        return CALC_OPERATION_MINUS;
      }
      if (
        isMinusSign(item) &&
        stack[index + 1] &&
        isNegativeNumber(stack[index + 1])
      ) {
        return CALC_OPERATION_PLUS;
      }
      if (index >= 2 && isNegativeNumber(item)) {
        const parsedItem = JSON.parse(item);
        const calcNumber = new CalcNumber(
          parsedItem.value,
          parsedItem.isNegative
        );
        const prevItem = stack[index - 1];
        if (prevItem === CALC_OPERATION_MINUS) {
          calcNumber.turnIntoPositive();
          return JSON.stringify(calcNumber);
        }
      }
      return item;
    })
    .reduce((expressionString, item) => {
      let parsedItem = "";
      if (isCalcOperation(item)) {
        parsedItem = parseSign(item, toCalculate);
      } else {
        const calcNumber = CalcNumber.parseInstance(item);
        parsedItem = toCalculate
          ? calcNumber.getNumber()
          : calcNumber.getString();
      }

      return expressionString.concat("", parsedItem);
    }, "");
}

export function appendInput(stack, input, isNegative) {
  if (guardDivisionByZero(stack, input)) {
    return stack;
  }
  if (isCalcOperation(input)) {
    return appendCalcOperation(stack, input, isNegative);
  }
  const newStack = isStackContainsResult(stack) ? [] : stack; // после ввода нового числа, стираем результат предыдущего вычисления
  return appendNumber(newStack, input, isNegative);
}

export function applyNegativeNumberMode(stack, mode) {
  const prevItem = tail(stack, 1)[0];
  if (isCalcOperation(prevItem)) {
    return stack;
  }

  return appendNumber(stack, "", mode);
}

export function calculateExpression(stack) {
  if (guardDivisionByZero(stack)) {
    return false;
  }
  const parsedStack = parseExpressionStack(stack, true);
  let calcResult = Function('"use strict";return (' + parsedStack + ")")();
  if (!Number.isInteger(calcResult)) {
    // округляем до 10-титысячных и отбрасываем лишние нули в конце
    // Зачем?: потому-что 2.2*3 = 6.6000000000000005 а не 6.6 🤷‍♂️
    calcResult = Number.parseFloat(calcResult).toPrecision(5);
    calcResult = String(calcResult).replace(/[0]*$/, "");
    calcResult = Number.parseFloat(calcResult);
  }

  let isNegative = false;
  if (Number(calcResult) < 0) {
    calcResult = Math.abs(calcResult);
    isNegative = true;
  }
  return [JSON.stringify(new CalcNumber(calcResult, isNegative, true))];
}

export function parseSign(sign, toCalculate = false) {
  if (!isCalcOperation(sign)) {
    return false;
  }
  switch (sign) {
    case CALC_OPERATION_DIVISION:
      return toCalculate ? "/" : String.fromCharCode(247);
      break;
    case CALC_OPERATION_MULTIPLY:
      return toCalculate ? "*" : String.fromCharCode(10005);
      break;
    case CALC_OPERATION_MINUS:
      return "-";
      break;
    case CALC_OPERATION_PLUS:
      return "+";
      break;
    default:
      return false;
  }
}

export function isCalcOperation(input) {
  return [
    CALC_OPERATION_MINUS,
    CALC_OPERATION_PLUS,
    CALC_OPERATION_MULTIPLY,
    CALC_OPERATION_DIVISION,
  ].includes(input);
}
