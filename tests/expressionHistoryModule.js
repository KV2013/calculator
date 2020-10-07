import CalcNumber from "../src/js/modules/CalcNumber";
import * as expressionHistory from "../src/js/modules/expressionHistory";
import { appendInput } from "../src/js/modules/expressionStack";
import * as constants from "../src/js/constants";

describe("addExpression", () => {
  function stubExpression(num = 1) {
    let expression1 = [];
    [
      JSON.stringify(CalcNumber.parseInstance({ value: "1" })),
      constants.CALC_OPERATION_PLUS,
      JSON.stringify(CalcNumber.parseInstance({ value: String(num) })),
    ].forEach((input) => {
      expression1 = appendInput(expression1, input);
    });
    return expression1;
  }
  test("it can add expression", () => {
    let history = [];
    history = expressionHistory.addExpression(history, stubExpression());
    expect(history.length).toBe(1);
    expect(history).toStrictEqual([expression1]);
  });

  test("history can contain 3 expressions", () => {
    let history = [];
    const exp1 = stubExpression(1);
    const exp2 = stubExpression(2);
    const exp3 = stubExpression(3);
    const exp4 = stubExpression(4);
    [exp1, exp2, exp3, exp4].forEach((exp) => {
      history = expressionHistory.addExpression(history, exp);
    });

    expect(history.length).toBe(3);
    expect(history).toStrictEqual([exp2, exp3, exp4]);
  });
});
