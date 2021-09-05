import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./baseReducer.js";
import createSagaMiddleware from "redux-saga";
import baseSaga from "./baseSaga.js";

const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(reducers, enhancer);

saga.run(baseSaga);

export default store;
