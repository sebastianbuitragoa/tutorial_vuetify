import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCstry_gy3N6wkXDuTIe49ARiN6xLXSnBQ",
  authDomain: "drey-f46f9.firebaseapp.com",
  projectId: "drey-f46f9",
  storageBucket: "drey-f46f9.appspot.com",
  messagingSenderId: "201971214895",
  appId: "1:201971214895:web:a455972b91a26f477474da"
};

initializeApp(firebaseConfig);
const db =getFirestore();

export default db;