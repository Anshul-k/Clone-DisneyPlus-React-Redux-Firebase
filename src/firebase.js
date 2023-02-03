import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbAbSqtJR2LPMGPtWDrINOSTLgVBWrtWo",
    authDomain: "disney-clone-react-redux-fireb.firebaseapp.com",
    projectId: "disney-clone-react-redux-fireb",
    storageBucket: "disney-clone-react-redux-fireb.appspot.com",
    messagingSenderId: "384160551984",
    appId: "1:384160551984:web:7b1a9dc036c421f02509f5",
    measurementId: "G-WEKB0CG9MK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;