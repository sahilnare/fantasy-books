import houseReducer from './houseReducer';
import bookReducer from './bookReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  book: bookReducer,
  house: houseReducer,
  search: searchReducer,
  firestore: firestoreReducer
});

export default rootReducer;
