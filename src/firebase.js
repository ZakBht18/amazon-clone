import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS_gIfvT7ydPHRZ6fP_PTM7FhDPGPEMzo",
  authDomain: "clone-d7383.firebaseapp.com",
  projectId: "clone-d7383",
  storageBucket: "clone-d7383.appspot.com",
  messagingSenderId: "522733482167",
  appId: "1:522733482167:web:62e275ce43216005b51d32",
  measurementId: "G-64DZTZSMN6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
