"use strict";

import { DECIMAL_SIGN } from "../constants";

class CalcNumber {
  constructor(value, isNegative = false, isCalculated = false) {
    if (value === DECIMAL_SIGN) {
      value = "0.";
    }
    this.value = Number(value);
    this.isNegative = Boolean(isNegative);
    this.isCalculated = isCalculated;
  }
  static parseInstance(item) {
    let instanceData = item;
    if (typeof instanceData === "string") {
      instanceData = JSON.parse(instanceData);
    }
    if (typeof instanceData !== "object") {
      console.error("Не валидный аргумент");
      return false;
    }

    if (!instanceData.hasOwnProperty("value")) {
      console.error("Не задано обязательное свойство value");
      return false;
    }

    instanceData = {
      isCalculated: false,
      isNegative: false,
      ...instanceData,
    };

    return new CalcNumber(
      instanceData.value,
      instanceData.isNegative,
      instanceData.isCalculated
    );
  }

  getString() {
    let strValue = this.isNegative ? `-${this.value}` : String(this.value);
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
