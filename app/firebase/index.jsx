import firebase from 'firebase'

try{
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };
firebase.initializeApp(config);
} catch (e) {

}

//create a provider which lets firebase know which social platform to use, super easy
export let githubProvider = new firebase.auth.GithubAuthProvider() // will be used in actions file to auth with github

export let firebaseRef = firebase.database().ref()
export default firebase;
