import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUGKdITlmFd_OsNHsf_vRa1_9i5Y_m0NQ",
    authDomain: "morevalue-f6170.firebaseapp.com",
    projectId: "morevalue-f6170",
    storageBucket: "morevalue-f6170.appspot.com",
    messagingSenderId: "738327980225",
    appId: "1:738327980225:web:f0e12eae6aca8b8f4fcc40"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export {
    db,
    firebase
}