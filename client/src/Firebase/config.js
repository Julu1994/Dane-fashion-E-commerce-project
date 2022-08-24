import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyDKCHy2iiFan_4jvSdpbSAc0W7mbwwcvqY",
    authDomain: "danedotcom-88638.firebaseapp.com",
    projectId: "danedotcom-88638",
    storageBucket: "danedotcom-88638.appspot.com",
    messagingSenderId: "150357402447",
    appId: "1:150357402447:web:3cdce1355bc5731accdb3a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
