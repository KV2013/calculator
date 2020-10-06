"use strict";

import { DECIMAL_SIGN } from "../constants";

class CalcNumber {
  constructor(value, isNegative) {
    if (value === DECIMAL_SIGN) {
      value = "0.";
    }
    this.value = String(value);
    this.isNegative = Boolean(isNegative);
  }

  getString() {
    let strValue = this.isNegative ? `-${this.value}` : this.value;
    strValue = strValue.replace(".", ",");
    return strValue;
  }

  getNumber() {
    return this.isNegative ? Number(`-${this.value}`) : Number(this.value);
  }

  get val() {
    return this.getValue();
  }

  append(val) {
    if (val === DECIMAL_SIGN) {
      val = ".";
      if (String(this.value).includes(".")) {
        val = "";
      }
    }

    this.value = String(this.value).concat("", val);
  }

  turnIntoNegative() {
    this.isNegative = true;
  }

  turnIntoPositive() {
    this.isNegative = false;
  }

  isFloat() {
    return String(this.value).includes(".");
  }

  removeFraction() {
    this.value = Number.parseInt(this.value, 10);
  }

  hasEmptyFraction() {
    return /\.[0]*$/.test(String(this.value));
  }
}

export default CalcNumber;
