import { createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

// imports index.tx of reducers
import rootReducer from './reducers';

// createStore takes initialState as a parameter
const initialState = {};

//  middleware
const middleware = [thunk];

// dev tools extension
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
