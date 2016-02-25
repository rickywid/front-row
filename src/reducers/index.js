import { combineReducers } from 'redux';
import getInfo from './reducers_getinfo';

const rootReducer = combineReducers({
  getInfo
});

export default rootReducer;
