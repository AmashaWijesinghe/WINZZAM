import {initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA0PbsT4Q5a9c8lFXcyvQWj5Lv6jf6LqBA",
    authDomain: "winzzam-fdcec.firebaseapp.com",
    projectId: "winzzam-fdcec",
    storageBucket: "winzzam-fdcec.appspot.com",
    messagingSenderId: "310646353218",
    appId: "1:310646353218:web:3314e4ed27506e7e732cdb",
    measurementId: "G-WM6QYMQ40R"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;