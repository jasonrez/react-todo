import firebase from 'firebase'

try{
var config = {
    apiKey: "AIzaSyCIoL3mDdeQYnrRL9SKl1QiN1LIb9YE1VI",
    authDomain: "neon-todo.firebaseapp.com",
    databaseURL: "https://neon-todo.firebaseio.com",
    projectId: "neon-todo",
    storageBucket: "neon-todo.appspot.com",
    messagingSenderId: "230513930607"
  };
firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref()
export default firebase;
