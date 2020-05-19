export const deleteBook = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('books').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_BOOK', id: id });
      }).catch((err) => {
        dispatch({ type: 'DELETE_BOOK_ERR', err: err });
      });
  }
}
