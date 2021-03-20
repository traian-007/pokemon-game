import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDUIpKYrVrJXray-0ECEalvoMPoQy1z91A",
    authDomain: "pokemon-game-2ac29.firebaseapp.com",
    databaseURL: "https://pokemon-game-2ac29-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-2ac29",
    storageBucket: "pokemon-game-2ac29.appspot.com",
    messagingSenderId: "154420279428",
    appId: "1:154420279428:web:7fa5a30892d69d4a2c2ad1"
};


firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;

