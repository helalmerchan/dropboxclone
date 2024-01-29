import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZD9Rk8Y0sOqF8mtxvYlEvo_z61KrtW-U",
    authDomain: "dropbox-clone-practice.firebaseapp.com",
    projectId: "dropbox-clone-practice",
    storageBucket: "dropbox-clone-practice.appspot.com",
    messagingSenderId: "175530263875",
    appId: "1:175530263875:web:75c13f02d55e6ea4365bf6"
};


const app = getApps.length ? getApp() :  initializeApp(firebaseConfig);
const db =  getFirestore(app);
const storage = getStorage(app);

export {db, storage}