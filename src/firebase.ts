// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGEwZG1mmQ5gqPH445a9Mw7G6c8MvZIvs",
    authDomain: "codeex-test-project.firebaseapp.com",
    projectId: "codeex-test-project",
    storageBucket: "codeex-test-project.appspot.com",
    messagingSenderId: "876747322655",
    appId: "1:876747322655:web:ce7cbb1af1cc2944ecec2a",
    measurementId: "G-W9MVXLP2QG"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);

export default fire;
