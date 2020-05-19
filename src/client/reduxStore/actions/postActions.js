export const addBook = (book) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('books').add({
      ...book,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_BOOK', book: book });
    }).catch((err) => {
      dispatch({ type: 'ADD_BOOK_ERR', err: err });
    });
  }
}

export const addHouse = (house) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('houses').add({
      ...house
    }).then(() => {
      dispatch({ type: 'ADD_HOUSE', house: house });
    }).catch((err) => {
      dispatch({ type: 'ADD_HOUSE_ERR', err: err });
    });
  }
}
