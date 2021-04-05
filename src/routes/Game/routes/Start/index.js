// import MenuHeader from "../../components/MenuHeader";
import { useState, useEffect, useContext } from "react";
import PokemonCard from '../../../../components/PokemonCard';
import { useHistory } from "react-router-dom";
import s from "./style.module.css";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAsync, selectPokemonsData, selectPokemonsLoading } from "../../../../store/pokemons";



const StartPage = () => {
    const history = useHistory()
    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext)

    //Redux
    const isLoading = useSelector(selectPokemonsLoading)
    const pokemonsRedux = useSelector(selectPokemonsData);
    console.log("isLoading", isLoading)
    const dispatch = useDispatch();

    const [pokemons, setPokemons] = useState({});
    useEffect(() => {
        dispatch(getPokemonsAsync());
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
            // dispatch(getPokemons(pokemons))
        });
        return () => firebase.offPokemonsSoket();
    }, []);
    useEffect(() => {
        setPokemons(pokemonsRedux);
    }, [pokemonsRedux])
    console.log('###: pokemonsRedux', pokemonsRedux)
    const handleChangeSelected = (key) => {
        const pokemon = { ...pokemons[key] }
        pokemonContext.addPokemonContext(key, pokemon)
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }


    const handleClickButton = () => {

        history.push("/game/board")
    }
    return (
        <>
            <div className={s.buttonWrap}>
                <button onClick={handleClickButton}
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                >
                    Start Game</button>
            </div>
            <div className={s.flex} >
                {
                    Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => (<PokemonCard
                        className={s.card}
                        key={key}
                        keyId={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={true}
                        isSelected={selected}
                        onClickCard={() => {
                            if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                                handleChangeSelected(key)
                            }
                        }}
                    />))}
            </div>

        </>

    )
}

export default StartPage;


// const handleClick = (id) => {
    //     setPokemons(prevState => {
    //         return Object.entries(prevState).reduce((acc, item) => {
    //             const pokemon = { ...item[1] };
    //             if (pokemon.id === id) {
    //                 pokemon.active = !pokemon.active
    //             };
    //             acc[item[0]] = pokemon;
    //             firebase.postPokemon(item[0], pokemon);
    //             return acc;
    //         }, {});
    //     });
    // }

       // const handleAddPokemon = () => {
    //     let data = POKEMONS[getRandomInt(4)]
    //     firebase.addPokemon(data)

    // }
    // const handleRemovePokemon = (keyId) => {
    //     firebase.removePokemon(keyId)
    //     // // database.ref('pokemons/' + keyId).remove().then(() => getPokemons());
    // }

    //  {/* <div className={s.container}>
    //             <button onClick={handleClickButton}>HomePage</button>
    //         </div> */}