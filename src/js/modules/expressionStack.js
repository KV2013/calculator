import {
  CALC_OPERATION_MINUS,
  CALC_OPERATION_PLUS,
  CALC_OPERATION_MULTIPLY,
  CALC_OPERATION_DIVISION,
} from "../constants";
import CalcNumber from "./CalcNumber";

function isCalcOperation(input) {
  return [
    CALC_OPERATION_MINUS,
    CALC_OPERATION_PLUS,
    CALC_OPERATION_MULTIPLY,
    CALC_OPERATION_DIVISION,
  ].includes(input);
}

function appendCalcOperation(stack, input, isNegative) {
  if (stack.length === 0) {
    return stack;
  }
  if (isNegative && input === CALC_OPERATION_PLUS) {
    input = CALC_OPERATION_MINUS;
  }

  if (isCalcOperation(stack[stack.length - 1])) {
    const newStack = stack.slice(0, stack.length - 1);
    newStack.push(input);
    return newStack;
  }

  return [...stack, input];
}

function appendNumber(stack, input, isNegative) {
  let calcNumber;

  if (stack.length === 0) {
    calcNumber = new CalcNumber(input, isNegative);
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
  calcNumber.append(input);
  const newStack = stack.slice(0, stack.length - 1);
  newStack.push(JSON.stringify(calcNumber));
  console.log("expressionStack::appendNumber", { newStack, calcNumber });
  return newStack;
}

export function parseExpressionStack(stack) {
  if (stack.length === 0) {
    return "0";
  }
  return stack.reduce((expressionString, item) => {
    let parsedItem = "";
    switch (item) {
      case CALC_OPERATION_DIVISION:
        parsedItem = String.fromCharCode(247);
        break;
      case CALC_OPERATION_MULTIPLY:
        parsedItem = String.fromCharCode(10005);
        break;
      case CALC_OPERATION_MINUS:
        parsedItem = "-";
        break;
      case CALC_OPERATION_PLUS:
        parsedItem = "+";
        break;
      default:
        let value;
        let isNegative;
        ({ value, isNegative } = JSON.parse(item));
        const calcNumber = new CalcNumber(value, isNegative);
        parsedItem = calcNumber.getValue();
        console.log("ExpressionStack.parse", { parsedItem });
    }

    return expressionString.concat("", parsedItem);
  }, "");
}

export function appendInput(stack, input, isNegative) {
  if (isCalcOperation(input)) {
    return appendCalcOperation(stack, input, isNegative);
  }
  return appendNumber(stack, input, isNegative);
}
