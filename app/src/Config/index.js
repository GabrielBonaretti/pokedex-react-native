import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgwKDszqNf7UTJdmLnyeWnoQzagCkRK50",
    authDomain: "lindomal.firebaseapp.com",
    projectId: "lindomal",
    storageBucket: "lindomal.appspot.com",
    messagingSenderId: "495454637992",
    appId: "1:495454637992:web:503c53d2d543fdec36d79d",
    measurementId: "G-Q3JDKL08PH"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);