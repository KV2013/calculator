import {
  appendInput,
  applyNegativeNumberMode,
  calculateExpression,
} from "../modules/expressionStack";
import { addExpression } from "../modules/expressionHistory";

export const initialState = {
  expressionStack: [],
  history: [],
  negativeNumberMode: false,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CLEAR":
      return {
        ...initialState,
        history: state.history,
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
      const expressionResult = calculateExpression(state.expressionStack);

      return {
        ...state,
        history: newExpressionHist,
        expressionStack: expressionResult,
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
