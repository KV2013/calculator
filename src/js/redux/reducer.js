import {
  appendInput,
  applyNegativeNumberMode,
  calculateExpression,
} from "../modules/expressionStack";
import { addExpression } from "../modules/expressionHistory";
import defaultThemes from "../themes";
import * as constants from "../constants";

export const initialState = {
  expressionStack: [],
  history: [],
  negativeNumberMode: false,
  defaultThemes: defaultThemes,
  fetchedThemes: [],
  currentTheme: constants.DEFAULT_THEME,
  themeRequestError: null,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CLEAR":
      return {
        ...initialState,
        history: state.history,
        defaultThemes: state.defaultThemes,
        fetchedThemes: state.fetchedThemes,
        currentTheme: state.currentTheme,
      };
    case "NEGATIVE_NUMBER_MODE_ENABLED":
      return updateNegativeNumberMode(state, true);
    case "NEGATIVE_NUMBER_MODE_DISABLED":
      return updateNegativeNumberMode(state, false);
    case "ADD_HISTORY_RECORD":
      const newHistory = addExpression(oldHistory, action.payload.expression);
      return {
        ...state,
        history: newHistory,
      };
    case "APPEND_TO_EXPRESSION":
      const oldExpressionStack = state.expressionStack;
      const newExpressionStack = appendInput(
        oldExpressionStack,
        action.payload.input,
        state.negativeNumberMode
      );
      return {
        ...state,
        expressionStack: newExpressionStack,
      };
    case "CALCULATE_EXPRESSION":
      const newExpressionHist = addExpression(
        state.history,
        state.expressionStack
      );
      let expressionResult = calculateExpression(state.expressionStack);
      if (expressionResult === false) {
        return state;
      }

      return {
        ...state,
        history: newExpressionHist,
        expressionStack: expressionResult,
      };
    case "THEME_SELECTED":
      return {
        ...state,
        currentTheme: action.payload.theme,
      };
    case "FETCH_THEMES_REQUESTED":
      return {
        ...state,
        fetchedThemes: [],
        themeRequestError: null,
      };
    case "FETCH_THEMES_SUCCEEDED":
      const newThemes = [{ name: "teal" }];
      return {
        ...state,
        fetchedThemes: newThemes,
        themeRequestError: null,
      };
    case "FETCH_THEMES_FAILD":
      return {
        ...state,
        fetchedThemes: [],
        themeRequestError: action.error.message,
      };
    default:
      return state;
  }
}

function updateNegativeNumberMode(state, mode) {
  const newExpressionStack = applyNegativeNumberMode(
    state.expressionStack,
    mode
  );

  return {
    ...state,
    expressionStack: newExpressionStack,
    negativeNumberMode: mode,
  };
}

export default rootReducer;
