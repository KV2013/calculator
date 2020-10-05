"use strict";

class CalcNumber {
  constructor(value, isNegative) {
    this.value = String(value);
    this.isNegative = Boolean(isNegative);
  }

  getValue() {
    return this.isNegative ? `-${this.value}` : this.value;
  }
  get val() {
    return this.getValue();
  }

  append(val) {
    this.value = String(this.value).concat("", val);
    console.log("CalcNumber.append", { val, thisValue: this.value });
  }

  turnIntoNegative() {
    this.isNegative = true;
  }

  turnIntoPositive() {
    this.isNegative = false;
  }
}

export default CalcNumber;
