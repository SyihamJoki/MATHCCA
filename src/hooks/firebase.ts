import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBfsawRkHaODV5a2rrmlAUe0B9IXyZGWrg",
  authDomain: "mathcca-rsh.firebaseapp.com",
  projectId: "mathcca-rsh",
  storageBucket: "mathcca-rsh.appspot.com",
  messagingSenderId: "180832427470",
  appId: "1:180832427470:web:fb06a1690f3260a8951f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);