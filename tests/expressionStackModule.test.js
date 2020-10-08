import * as expressionStack from "../src/js/modules/expressionStack";
import * as constants from "../src/js/constants";
import CalcNumber from "../src/js/modules/CalcNumber";

describe("appendInput", () => {
  test("2+2", () => {
    let stack = [];
    stack = expressionStack.appendInput(stack, "2", false);
    stack = expressionStack.appendInput(
      stack,
      constants.CALC_OPERATION_PLUS,
      false
    );
    stack = expressionStack.appendInput(stack, "2", false);

    expect(stack).toStrictEqual([
      JSON.stringify({ value: "2", isNegative: false, isCalculated: false }),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify({ value: "2", isNegative: false, isCalculated: false }),
    ]);
  });

  test("5,5*2", () => {
    let stack = [];
    stack = expressionStack.appendInput(stack, "5", false);
    stack = expressionStack.appendInput(stack, constants.DECIMAL_SIGN, false);
    stack = expressionStack.appendInput(stack, "5", false);
    stack = expressionStack.appendInput(
      stack,
      constants.CALC_OPERATION_MULTIPLY,
      false
    );
    stack = expressionStack.appendInput(stack, "2", false);

    expect(stack).toStrictEqual([
      JSON.stringify({ value: "5.5", isNegative: false, isCalculated: false }),
      constants.CALC_OPERATION_MULTIPLY,
      JSON.stringify({ value: "2", isNegative: false, isCalculated: false }),
    ]);
  });

  test("15 - + * / 3", () => {
    let stack = [];
    const inputStream = [
      "1",
      "5",
      constants.CALC_OPERATION_MINUS,
      constants.CALC_OPERATION_PLUS,
      constants.CALC_OPERATION_MULTIPLY,
      constants.CALC_OPERATION_DIVISION,
      "3",
    ];
    inputStream.forEach((input, index) => {
      stack = expressionStack.appendInput(stack, input, false);
    });

    expect(stack).toStrictEqual([
      JSON.stringify({ value: "15", isNegative: false, isCalculated: false }),
      constants.CALC_OPERATION_DIVISION,
      JSON.stringify({ value: "3", isNegative: false, isCalculated: false }),
    ]);
  });

  test("every number", () => {
    let stack = [];
    const inputStream = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    inputStream.forEach((input) => {
      let newStack = expressionStack.appendInput(stack, input, false);
      expect(newStack.length).toBe(1);
      expect(newStack).toStrictEqual([
        JSON.stringify({
          value: input,
          isNegative: false,
          isCalculated: false,
        }),
      ]);

      newStack = expressionStack.appendInput(stack, input, true);
      expect(newStack.length).toBe(1);
      expect(newStack).toStrictEqual([
        JSON.stringify({
          value: input,
          isNegative: true,
          isCalculated: false,
        }),
      ]);
    });
  });

  test("every operation", () => {
    let stack = [];
    const inputStream = [
      constants.CALC_OPERATION_MINUS,
      constants.CALC_OPERATION_PLUS,
      constants.CALC_OPERATION_MULTIPLY,
      constants.CALC_OPERATION_DIVISION,
    ];
    inputStream.forEach((input) => {
      let stack = [];

      stack = expressionStack.appendInput(stack, "1", false);
      stack = expressionStack.appendInput(stack, input, false);
      expect(stack.length).toBe(2);
      expect(stack).toStrictEqual([
        JSON.stringify({
          value: "1",
          isNegative: false,
          isCalculated: false,
        }),
        input,
      ]);

      stack = [];
      stack = expressionStack.appendInput(stack, "1", true);
      stack = expressionStack.appendInput(stack, input, true);
      expect(stack.length).toBe(2);
      expect(stack).toStrictEqual([
        JSON.stringify({
          value: "1",
          isNegative: true,
          isCalculated: false,
        }),
        input,
      ]);
    });
  });
});

describe("parseExpressionStack", () => {
  test("parse 01.001", () => {
    let stack = [];
    let inputStream = ["0", "1", constants.DECIMAL_SIGN, "0", "0", "1"];
    const isNegative = false;
    const isCalculated = false;

    inputStream.forEach(
      (input) => (stack = expressionStack.appendInput(stack, input, isNegative))
    );
    expect(stack.length).toBe(1);

    const parsedExpression = expressionStack.parseExpressionStack(stack);
    expect(parsedExpression).toBe("1" + constants.DECIMAL_SIGN + "001");
  });

  test("parse 2.2 + 0.2 * 2 - 2 / 0.2", () => {
    let stack = [];
    let inputStream = [
      "2",
      constants.DECIMAL_SIGN, //
      constants.DECIMAL_SIGN, // testing toggling decimal sign
      constants.DECIMAL_SIGN, //
      "2",
      constants.CALC_OPERATION_PLUS,
      "0",
      constants.DECIMAL_SIGN,
      "2",
      constants.CALC_OPERATION_MULTIPLY,
      "2",
      constants.CALC_OPERATION_MINUS,
      "2",
      constants.CALC_OPERATION_DIVISION,
      "0",
      constants.DECIMAL_SIGN,
      "2",
    ];
    const isNegative = false;
    const isCalculated = false;

    inputStream.forEach(
      (input) => (stack = expressionStack.appendInput(stack, input, isNegative))
    );
    expect(stack.length).toBe(9);

    const plusSign = expressionStack.parseSign(constants.CALC_OPERATION_PLUS);
    const minusSign = expressionStack.parseSign(constants.CALC_OPERATION_MINUS);
    const multiSign = expressionStack.parseSign(
      constants.CALC_OPERATION_MULTIPLY
    );
    const divisionSign = expressionStack.parseSign(
      constants.CALC_OPERATION_DIVISION
    );

    const parsedExpression = expressionStack.parseExpressionStack(stack);
    expect(parsedExpression).toBe(
      `2${constants.DECIMAL_SIGN}2${plusSign}0${constants.DECIMAL_SIGN}2` +
        `${multiSign}2${minusSign}2${divisionSign}0` +
        `${constants.DECIMAL_SIGN}2`
    );
  });

  test.only("add negative number", () => {
    let stack = [
      JSON.stringify(new CalcNumber("5")),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify(new CalcNumber("6", true)),
    ];
    const parsedExpression = expressionStack.parseExpressionStack(stack);
    const minusSign = expressionStack.parseSign(constants.CALC_OPERATION_MINUS);
    expect(parsedExpression).toBe(`5${minusSign}6`);
  });

  test("5 - (-6)", () => {
    let stack = [
      JSON.stringify(new CalcNumber("5")),
      constants.CALC_OPERATION_MINUS,
      JSON.stringify(new CalcNumber("6", true)),
    ];
    const parsedExpression = expressionStack.parseExpressionStack(stack);
    const plusSign = expressionStack.parseSign(constants.CALC_OPERATION_PLUS);
    expect(parsedExpression).toBe(`5${plusSign}6`);
  });
});

describe("applyNegativeNumberMode", () => {
  test("toggle mode for single number", () => {
    let newStack = [];
    let mode;
    const isNegative = false;
    const isCalculated = false;
    const stack = [JSON.stringify({ value: "2", isNegative, isCalculated })];

    mode = constants.NEGATIVE_NUMBER_MODE_ENABLED;
    newStack = expressionStack.applyNegativeNumberMode(stack, mode);
    expect(newStack.length).toBe(1);
    expect(newStack).toStrictEqual([
      JSON.stringify({ value: "2", isNegative: true, isCalculated }),
    ]);

    mode = constants.NEGATIVE_NUMBER_MODE_DISABLED;
    newStack = expressionStack.applyNegativeNumberMode(newStack, mode);
    expect(newStack.length).toBe(1);
    expect(newStack).toStrictEqual([
      JSON.stringify({ value: "2", isNegative: false, isCalculated }),
    ]);
  });
  test("toggle  mode for expression", () => {
    let newStack = [];
    let mode;

    const isNegative = false;
    const isCalculated = false;
    const stack = [
      JSON.stringify({ value: "2", isNegative, isCalculated }),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify({ value: "2", isNegative, isCalculated }),
    ];
    mode = constants.NEGATIVE_NUMBER_MODE_ENABLED;
    newStack = expressionStack.applyNegativeNumberMode(stack, mode);
    expect(newStack.length).toBe(3);
    expect(newStack).toStrictEqual([
      JSON.stringify({ value: "2", isNegative: false, isCalculated }),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify({ value: "2", isNegative: true, isCalculated }),
    ]);

    mode = constants.NEGATIVE_NUMBER_MODE_DISABLED;
    newStack = expressionStack.applyNegativeNumberMode(newStack, mode);
    expect(newStack.length).toBe(3);
    expect(newStack).toStrictEqual([
      JSON.stringify({ value: "2", isNegative: false, isCalculated }),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify({ value: "2", isNegative: false, isCalculated }),
    ]);
  });
});
describe("calculateExpression", () => {
  test("14 - 77 / 2 - 3000 - 1175.5", () => {
    const stack = [
      JSON.stringify(CalcNumber.parseInstance({ value: 14 })),
      constants.CALC_OPERATION_MINUS,
      JSON.stringify(CalcNumber.parseInstance({ value: 77 })),
      constants.CALC_OPERATION_DIVISION,
      JSON.stringify(CalcNumber.parseInstance({ value: 2 })),
      constants.CALC_OPERATION_MINUS,
      JSON.stringify(CalcNumber.parseInstance({ value: 3000 })),
      constants.CALC_OPERATION_MINUS,
      JSON.stringify(CalcNumber.parseInstance({ value: 1175.5 })),
    ];

    const stackWithResult = expressionStack.calculateExpression(stack);
    expect(stackWithResult.length).toBe(1);
    expect(stackWithResult).toStrictEqual([
      JSON.stringify(
        CalcNumber.parseInstance({
          value: "4200",
          isNegative: true,
          isCalculated: true,
        })
      ),
    ]);
  });
});
