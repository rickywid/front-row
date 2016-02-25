import { combineReducers } from 'redux';
import getInfo from './reducers_getinfo';
import getUpEvents from './reducer_getUpEvents';

const rootReducer = combineReducers({
  getInfo: getInfo,
  getUpEvents: getUpEvents
});

export default rootReducer;
