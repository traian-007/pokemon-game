import { createSlice } from "@reduxjs/toolkit";
// import FirebaseClass from "../service/firebase";
import { selectLocalID } from "./user";

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: false,
        data: {},
        error: null
    },
    reducers: {
        fetchPokemons: state => ({
            ...state,
            isLoading: true
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false,
            data: {},
            error: action.payload
        })
    }
})
export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject } = slice.actions;
export const selectPokemonsLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;

export const getPokemonsAsync = () => async (dispatch, getState) => {    //action, inside it we can use more dispatch
    const localId = selectLocalID(getState());
    dispatch(fetchPokemons());
    // const data = await FirebaseClass.getPokemonsOnce();
    const data = await fetch(`https://pokemon-game-2ac29-default-rtdb.firebaseio.com/${localId}/pokemons.json`).then(res => res.json());
    // console.log('##data', data)
    dispatch(fetchPokemonsResolve(data))

}
export default slice.reducer;