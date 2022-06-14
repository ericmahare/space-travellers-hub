import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rocket/rocketSlice';
import missionsReducer from './mission/missionSlice';

const reducer = combineReducers({
  rocketsReducer, missionsReducer
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
