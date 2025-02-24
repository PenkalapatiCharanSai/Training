import { applyMiddleware, createStore } from "redux";
import bookReducer from "./bookreducer";
import logger from "redux-logger"; //*npm install redux-logger

const store = createStore(bookReducer, applyMiddleware(logger));

export default store;


