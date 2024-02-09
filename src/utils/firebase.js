// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCospSXY05HF1kZEdr_m5eub0U8YhYFxE",
  authDomain: "netflixgpt-9dc26.firebaseapp.com",
  projectId: "netflixgpt-9dc26",
  storageBucket: "netflixgpt-9dc26.appspot.com",
  messagingSenderId: "982078016753",
  appId: "1:982078016753:web:466cee0166053ef18bad50",
  measurementId: "G-2W2QSGFG80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();