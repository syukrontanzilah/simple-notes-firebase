import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC939H1dtyALPyDh84c867uvYtzFDeMtJQ",
  authDomain: "simple-notes-firebase-2c1c8.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-2c1c8.firebaseio.com",
  projectId: "simple-notes-firebase-2c1c8",
  storageBucket: "simple-notes-firebase-2c1c8.appspot.com",
  messagingSenderId: "1080771328692",
  appId: "1:1080771328692:web:70b1da5f803baa8a6175e1",
  measurementId: "G-KWC03ZW4M0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const database = firebase.database();

export default firebase;