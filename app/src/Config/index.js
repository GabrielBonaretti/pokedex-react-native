// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgwKDszqNf7UTJdmLnyeWnoQzagCkRK50",
    authDomain: "lindomal.firebaseapp.com",
    projectId: "lindomal",
    storageBucket: "lindomal.appspot.com",
    messagingSenderId: "495454637992",
    appId: "1:495454637992:web:503c53d2d543fdec36d79d",
    measurementId: "G-Q3JDKL08PH"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);