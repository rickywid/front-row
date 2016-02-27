import { combineReducers } from 'redux';
import getInfo from './reducer_getinfo';
import getUpEvents from './reducer_getUpEvents';
import getmusic from './reducer_getinfo';

const rootReducer = combineReducers({
  getInfo: getInfo,
  getUpEvents: getUpEvents,
  getmusic: getInfo,
  getsports: getInfo,
  gettheatre: getInfo,
  getcomedy: getInfo
});

export default rootReducer;
