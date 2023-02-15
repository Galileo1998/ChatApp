import {initializeApp} from 'firebase/app';
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDyPVycJtwb5JAXp8NIXGvG8_w9sVv9NhU",
    authDomain: "chat-94d09.firebaseapp.com",
    databaseURL: "https://chat-94d09-default-rtdb.firebaseio.com",
    projectId: "chat-94d09",
    storageBucket: "chat-94d09.appspot.com",
    messagingSenderId: "142799162827",
    appId: "1:142799162827:web:94587c21663cf0fda8fa4e"
  };

 const app = initializeApp(firebaseConfig);

 export const db = getDatabase(app);