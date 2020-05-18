export const addBook = (book) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('books').add({
      ...book,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_BOOK', book: book });
    }).catch((err) => {
      dispatch({ type: 'ADD_BOOK_ERR', err: err })
    })
  }
}
