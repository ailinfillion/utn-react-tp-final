// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7zBjjTvBygMvPcuiFounPUJsLahbUh-o",
    authDomain: "utn-react-tp-final.firebaseapp.com",
    projectId: "utn-react-tp-final",
    storageBucket: "utn-react-tp-final.appspot.com",
    messagingSenderId: "117061988305",
    appId: "1:117061988305:web:ea9c587025d54ae6c5baf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Set persistence to Local Storage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Auth persistence set to LocalStorage.");
  })
  .catch((err) => {
    console.error("Error setting auth persistence:", err);
  });
