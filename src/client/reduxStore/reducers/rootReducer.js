import houseReducer from './houseReducer';
import bookReducer from './bookReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  book: bookReducer,
  house: houseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
