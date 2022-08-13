// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE1OYGaGYcB1NH94qYgFI0BbsLWZKY5W8",
  authDomain: "travel-agency-22449.firebaseapp.com",
  projectId: "travel-agency-22449",
  storageBucket: "travel-agency-22449.appspot.com",
  messagingSenderId: "80361564440",
  appId: "1:80361564440:web:75d5f83fd03f5cd37a566d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
