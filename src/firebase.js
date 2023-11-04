import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCJQzapejwTjDNrhJbooi2tVF0HkmqLDvI",
    authDomain: "authtwitter-a77f1.firebaseapp.com",
    projectId: "authtwitter-a77f1",
    storageBucket: "authtwitter-a77f1.appspot.com",
    messagingSenderId: "70096373784",
    appId: "1:70096373784:web:d446be3211125e2cab1b6d",
    measurementId: "G-YGY9F1P2E1"
});

const auth = app.auth();
export { auth };
export default app;
