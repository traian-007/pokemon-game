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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }
    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val())
        })
    }
    offPokemonsSoket = () => {
        this.database.ref('pokemons').off()
    }
    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val())
    }
    postPokemon = (key, pokemon) => {
        return this.database.ref(`pokemons/${key}`).set(pokemon);
    }
    addPokemon = (data) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data);
    }
    removePokemon = (keyId) => {
        this.database.ref('pokemons/' + keyId).remove()
    }
}

export default Firebase;

