import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkxgtdrM3kM2bs8nSwQ62u3eRKZmPFDyM",
  authDomain: "jatin-firegram-2f3eb.firebaseapp.com",
  projectId: "jatin-firegram-2f3eb",
  storageBucket: "jatin-firegram-2f3eb.appspot.com",
  messagingSenderId: "894366184248",
  appId: "1:894366184248:web:8baf5b727cbbddc4a687cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };