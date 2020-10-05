import {
  appendInput,
  applyNegativeNumberMode,
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
      return initialState;
    case "NEGATIVE_NUMBER_MODE_ENABLED":
      return updateNegativeNumberMode(state, true);
    case "NEGATIVE_NUMBER_MODE_DISABLED":
      return updateNegativeNumberMode(state, false);
    case "ADD_HISTORY_RECORD":
      const oldHistory = state.history;
      const newHistory = addExpression(oldHistory, action.payload.expression);
      return {
        ...state,
        history: newHistory,
      };
    case "APPEND_TO_EXPRESSION":
      console.log(action);
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
