import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { initialState } from "./reducer";

export default function configureStore() {
  const store = createStore(rootReducer, initialState, composeWithDevTools());

  return store;
}
