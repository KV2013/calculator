export function allClear() {
  console.log("allClear actioni");
  return {
    type: "ALL_CLEAR",
  };
}

// TODO: remove
export function calculateExpression() {
  return {
    type: "CALCULATE_EXPRESSION",
  };
}

export function enableNegativeNumber() {
  return {
    type: "NEGATIVE_NUMBER_MODE_ENABLED",
  };
}

export function disableNegativeNumber() {
  return {
    type: "NEGATIVE_NUMBER_MODE_DISABLED",
  };
}

export function addHistoryRecord(exporession) {
  return {
    type: "ADD_HISTORY_RECORD",
    payload: { exporession },
  };
}

export function appendToExpression(input) {
  return {
    type: "APPEND_TO_EXPRESSION",
    payload: { input },
  };
}
