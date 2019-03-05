import { createStore, compose, combineReducers } from 'redux';
import appReducer from 'store/reducers/appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  appReducer,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
