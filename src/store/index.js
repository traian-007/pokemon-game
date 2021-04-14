import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import counterReducer from './counter';
import pokemonsReducer from './pokemons';



export default configureStore({
    reducer: {
        counter: counterReducer,
        pokemons: pokemonsReducer,
        user: userReducer
    }
})
