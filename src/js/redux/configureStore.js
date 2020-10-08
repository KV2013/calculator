import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer, { initialState } from "./reducer";
import mySaga from "./sagas";

const composeEnhancers = composeWithDevTools({});
export default function configureStore() {
  const sagaMiddleware = createSageMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(mySaga);

  return store;
}
