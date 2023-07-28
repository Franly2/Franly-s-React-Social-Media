// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEDlcHeVXqGyK-x5jLu-3FzVYT5awmTEE",
  authDomain: "react-social-media-7b56c.firebaseapp.com",
  projectId: "react-social-media-7b56c",
  storageBucket: "react-social-media-7b56c.appspot.com",
  messagingSenderId: "850317575754",
  appId: "1:850317575754:web:116a4bb04ecd90a103c8b3",
  measurementId: "G-XSXE6ELPQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
