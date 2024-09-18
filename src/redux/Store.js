// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';

import authReducer from './Reducer';
import { thunk } from 'redux-thunk';


// Combine your reducers (if you have more than one reducer)
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create the Redux store and apply middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware correctly
);

export default store;

