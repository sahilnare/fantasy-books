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

export const deletePost = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('posts').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_POST', id: id });
      }).catch((err) => {
        dispatch({ type: 'DELETE_POST_ERR', err: err });
      });
  }
}
