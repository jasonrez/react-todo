import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCIoL3mDdeQYnrRL9SKl1QiN1LIb9YE1VI",
    authDomain: "neon-todo.firebaseapp.com",
    databaseURL: "https://neon-todo.firebaseio.com",
    projectId: "neon-todo",
    storageBucket: "neon-todo.appspot.com",
    messagingSenderId: "230513930607"
  };
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref()
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'jason',
    age: 37
  }
})

firebaseRef.update({
  'app/name' : 'My Todo App',
  'user/name' : 'Neon'
})

// firebaseRef.child('user').update({name: 'steve'})
// firebaseRef.child('app').update({name: 'Loco App'})
// firebaseRef.update({isRunning: null})
// firebaseRef.child('user/age').remove()
//
// firebaseRef.once('value').then((snapshot)=>{
//   console.log('got all the data ', snapshot.val() )
// },(e)=>{
//   console.log('could not grab data from database')
// })
// firebaseRef.child('user').on('value', (snapshot)=>{console.log('user change'  , snapshot.val())})
// firebaseRef.child('user').update({name: 'james'});
// firebaseRef.child('app').update({name: 'james APP'});
//
//
// let noteRef = firebaseRef.child('note')
// noteRef.on('child_added', (snapshot)=>{
//   console.log('child_added ', snapshot.key, snapshot.val())
// })
//
// let newNoteRef =  noteRef.push({todo: 'Eat food'})
// noteRef.push({todo2: 'Eat food again'})
//
//
// //let newRef = firebaseRef.push({myData: 'some data'})
// //newRef.push({myData2: 'some data 2'})

let todosRef = firebaseRef.child('todo');
todosRef.on('child_added', (snapshot)=>{
  console.log('child_added', snapshot.key, snapshot.val())
})
todosRef.push({text: 'walk dog'})
todosRef.push({text: 'eat Food'})
