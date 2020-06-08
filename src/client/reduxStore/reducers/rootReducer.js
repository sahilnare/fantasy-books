import searchReducer from './searchReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  search: searchReducer,
  post: postReducer,
  firestore: firestoreReducer
});

export default rootReducer;
