import { applyMiddleware, createStore, compose } from "redux"

import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middlewares = [promise(), thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger')  // load only in dev mode
  middlewares.push(logger());
}

const middleware = applyMiddleware(...middlewares)

const enhancers = compose(
  middleware,
  process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f,
); // using redux chrome extentions in dev mode

export default createStore(reducer, enhancers);