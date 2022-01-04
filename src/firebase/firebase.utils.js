import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyC3ZmuwbbxlHgkdCpKMgvlZF4zBlVfiMqQ",
    authDomain: "crwn-dbcl.firebaseapp.com",
    projectId: "crwn-dbcl",
    storageBucket: "crwn-dbcl.appspot.com",
    messagingSenderId: "153521116346",
    appId: "1:153521116346:web:0f7a53f5214a298caf9e83",
    measurementId: "G-WR7413SEEX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;