import houseReducer from './houseReducer';
import bookReducer from './bookReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  book: bookReducer,
  house: houseReducer
});

export default rootReducer;
