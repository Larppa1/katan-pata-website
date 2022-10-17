// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPiAWQakjO3pBlZXEwk0Z8iC_4A81Umkc",
  authDomain: "katanpata-98e47.firebaseapp.com",
  projectId: "katanpata-98e47",
  storageBucket: "katanpata-98e47.appspot.com",
  messagingSenderId: "414989774302",
  appId: "1:414989774302:web:bb148ea93bac5b09adc14f",
  measurementId: "G-0LZ1CL4FGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);