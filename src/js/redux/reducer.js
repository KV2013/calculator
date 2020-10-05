import { appendInput } from "../modules/expressionStack";
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
      return {
        ...state,
        negativeNumberMode: true,
      };
    case "NEGATIVE_NUMBER_MODE_DISABLED":
      return {
        ...state,
        negativeNumberMode: false,
      };
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

export default rootReducer;
