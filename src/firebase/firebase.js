import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCJLHWpnL-H7DPHgvA8NvJhluLrYI6Snvo",
  authDomain: "herbyherado-198014.firebaseapp.com",
  databaseURL: "https://herbyherado-198014.firebaseio.com",
  projectId: "herbyherado-198014",
  storageBucket: "herbyherado-198014.appspot.com",
  messagingSenderId: "274437662526"
};
firebase.initializeApp(config);
const database = firebase.database()

export default database