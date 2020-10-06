"use strict";

class CalcNumber {
  constructor(value, isNegative) {
    this.value = String(value);
    this.isNegative = Boolean(isNegative);
  }

  getString() {
    let strValue = this.isNegative ? `-${this.value}` : this.value;
    strValue = strValue.replace(".", ",");
    return strValue;
  }

  getNumber() {
    return this.isNegative ? `-${this.value}` : this.value;
  }

  get val() {
    return this.getValue();
  }

  append(val) {
    if (val === ",") {
      this.value = String(this.value).concat("", ".");
    } else {
      this.value = String(this.value).concat("", val);
    }
  }

  turnIntoNegative() {
    this.isNegative = true;
  }

  turnIntoPositive() {
    this.isNegative = false;
  }
}

export default CalcNumber;
