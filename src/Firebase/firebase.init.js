// import dotenv  from 'dotenv'
// dotenv.config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app





 // apiKey: "AIzaSyCK8iQMgEdX9hVh_otGVmxIJYDHE0H4w_A",
  // authDomain: "evently-b4490.firebaseapp.com",
  // projectId: "evently-b4490",
  // storageBucket: "evently-b4490.firebasestorage.app",
  // messagingSenderId: "541968900826",
  // appId: "1:541968900826:web:27390ef62762d1b18a3be3",
  // measurementId: "G-F3SR6CMG2L"