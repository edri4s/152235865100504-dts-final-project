// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAFzY9CXnvdFV89Z8GTqKWYsz95ogqheo",
    authDomain: "final-project-phonespech.firebaseapp.com",
    projectId: "final-project-phonespech",
    storageBucket: "final-project-phonespech.appspot.com",
    messagingSenderId: "332187238665",
    appId: "1:332187238665:web:e573cb6d094902646953d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
