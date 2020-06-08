
export const addPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('posts').add({
      ...post,
    }).then(() => {
      dispatch({ type: 'ADD_POST', post: post });
    }).catch((err) => {
      dispatch({ type: 'ADD_POST_ERR', err: err });
    });
  }
}
