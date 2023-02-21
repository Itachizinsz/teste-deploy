import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-T9ZpML6jthwRjHVv0bJdA1feBGoGNoE",
  authDomain: "auth--firebase-19aaa.firebaseapp.com",
  projectId: "auth--firebase-19aaa",
  storageBucket: "auth--firebase-19aaa.appspot.com",
  messagingSenderId: "150615010797",
  appId: "1:150615010797:web:84c433ab609d1658d54be4",
  measurementId: "G-M0Y6ZL0BVV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);