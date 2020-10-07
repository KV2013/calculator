import CalcNumber from "../src/js/modules/CalcNumber";
import * as constants from "../src/js/constants";

describe("parseInstance", () => {
  test("creates CalcNumber instance", () => {
    const val = Math.random();
    const calcNumber = CalcNumber.parseInstance({ value: val });
    expect(calcNumber).toBeInstanceOf(CalcNumber);
    expect(calcNumber.getNumber()).toBe(val);
  });
  test("return false when value property is absent", () => {
    expect(CalcNumber.parseInstance({})).toBeFalsy();
  });
  test("return false for symbols", () => {
    [
      constants.DECIMAL_SIGN,
      constants.CALC_OPERATION_PLUS,
      constants.CALC_OPERATION_MINUS,
      constants.CALC_OPERATION_MULTIPLY,
      constants.CALC_OPERATION_DIVISION,
    ].forEach((symb) => {
      expect(CalcNumber.parseInstance(symb)).toBeFalsy();
    });
  });
});

describe("getNumber", () => {
  test("return Number value", () => {
    const negativeNumber = true;
    expect(new CalcNumber("1").getNumber()).toBe(1);
    expect(new CalcNumber("1.1").getNumber()).toBe(1.1);
    expect(new CalcNumber("0.").getNumber()).toBe(0);
    expect(new CalcNumber("1", negativeNumber).getNumber()).toBe(-1);
  });
});
describe("getString", () => {
  test("return String value", () => {
    const negativeNumber = true;
    expect(new CalcNumber("1").getString()).toBe("1");
    expect(new CalcNumber("1.1").getString()).toBe("1,1");
    expect(new CalcNumber("0.").getString()).toBe("0,");
    expect(new CalcNumber("1", negativeNumber).getString()).toBe("-1");
  });
});

describe("append", () => {
  test("it prevents duplicating decimal sign ", () => {
    const calcNumber = new CalcNumber("1");
    calcNumber.append(constants.DECIMAL_SIGN);
    calcNumber.append(constants.DECIMAL_SIGN);
    calcNumber.append("1");
    expect(calcNumber.getNumber()).toBe(1.1);
    expect(calcNumber.getString()).toBe("1,1");
  });
});

describe("turnIntoNegative", () => {
  test("it makes negative number", () => {
    const calcNum = new CalcNumber("1");
    expect(calcNum.getNumber()).toBe(1);
    calcNum.turnIntoNegative();
    expect(calcNum.getNumber()).toBe(-1);
  });
});

describe("turnIntoPositive", () => {
  test("it makes positive number", () => {
    const calcNum = new CalcNumber("1", true);
    expect(calcNum.getNumber()).toBe(-1);
    calcNum.turnIntoPositive();
    expect(calcNum.getNumber()).toBe(1);
  });
});

describe("isFloat", () => {
  test("it returns true for float", () => {
    expect(new CalcNumber("1.1").isFloat()).toBeTruthy();
  });
  test("it returns false for int", () => {
    expect(new CalcNumber("1").isFloat()).toBeFalsy();
  });
});

describe("removeFraction", () => {
  test("it rmoves fractions", () => {
    const calcNum = new CalcNumber("1.1");
    expect(calcNum.getNumber()).toBe(1.1);
    calcNum.removeFraction();
    expect(calcNum.getNumber()).toBe(1);
  });
});

describe("hasEmptyFraction", () => {
  test("it returns true if CalcNumber contains empty  fraction", () => {
    const calcNum = new CalcNumber("1.");
    expect(calcNum.hasEmptyFraction()).toBeTruthy();
  });
  test("it returns false if CalcNumber does not contains empty fraction", () => {
    const calcNum = new CalcNumber("1");
    expect(calcNum.hasEmptyFraction()).toBeFalsy();
  });
});
