// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJBgmw8fZsOen9ai-JEYjOZtrIioG_2ZM",
  authDomain: "netflixgpt-e2a13.firebaseapp.com",
  projectId: "netflixgpt-e2a13",
  storageBucket: "netflixgpt-e2a13.firebasestorage.app",
  messagingSenderId: "385009723079",
  appId: "1:385009723079:web:20d7f35eb0fb21f66140e2",
  measurementId: "G-87F9CRGS9Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

