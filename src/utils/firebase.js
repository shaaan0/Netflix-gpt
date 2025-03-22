// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxD3oPnkyhNLaul7KoKBPSHxiE7Pj1hmk",
  authDomain: "netflixgpt-ac4f5.firebaseapp.com",
  projectId: "netflixgpt-ac4f5",
  storageBucket: "netflixgpt-ac4f5.firebasestorage.app",
  messagingSenderId: "10941832595",
  appId: "1:10941832595:web:6e4b7a3ac904518cba5c66",
  measurementId: "G-Q5YMS0F9LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
