export function allClear() {
  return {
    type: "ALL_CLEAR",
  };
}

export function calculateExpression() {
  return {
    type: "CALCULATE_EXPRESSION",
  };
}

export function enableNegativeNumber() {
  return {
    type: "ENABLE_NEGATIVE_NUMBER",
  };
}

export function disableNegativeNumber() {
  return {
    type: "DISABLE_NEGATIVE_NUMBER",
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
