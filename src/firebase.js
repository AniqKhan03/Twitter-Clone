// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD63M3Q1ZC95oLchDxw_QEY7nqxNAMZLVQ",
  authDomain: "twitter-clone-62020.firebaseapp.com",
  projectId: "twitter-clone-62020",
  storageBucket: "twitter-clone-62020.appspot.com",
  messagingSenderId: "189475534811",
  appId: "1:189475534811:web:fa5865c9e96f11b71219fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;

