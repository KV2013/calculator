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

export function themeSelected(theme) {
  return {
    type: "THEME_SELECTED",
    payload: { theme },
  };
}

export function fetchThemesRequested() {
  return {
    type: "FETCH_THEMES_REQUESTED",
  };
}

export function fetchThemesSucceeded() {
  return {
    type: "FETCH_THEMES_SUCCEEDED",
  };
}

export function fetchThemesFaild() {
  return {
    type: "FETCH_THEMES_FAILD",
  };
}
