
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/analytics";


var firebaseConfig = {
  apiKey: "AIzaSyBcorlD7iDk9A9JSftodpsL3i3MBJxZ1ys",
  authDomain: "fantasy-books-ccc91.firebaseapp.com",
  databaseURL: "https://fantasy-books-ccc91.firebaseio.com",
  projectId: "fantasy-books-ccc91",
  storageBucket: "fantasy-books-ccc91.appspot.com",
  messagingSenderId: "1019834085654",
  appId: "1:1019834085654:web:4fb2c0a2b96d6a96f8e037",
  measurementId: "G-ZP6S07RLZG"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});
// firebase.analytics();

export default firebase;
