// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsT8uNoqs9igKJ4OzbU00aVmRpU-Yi2ws",
  authDomain: "goats-of-war.firebaseapp.com",
  projectId: "goats-of-war",
  storageBucket: "goats-of-war.firebasestorage.app",
  messagingSenderId: "984467228469",
  appId: "1:984467228469:web:a79dc089e6cc5cff42ee7c",
  measurementId: "G-NW7MS7Z51H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

export { firebaseAnalytics, firebaseApp };