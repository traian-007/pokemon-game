// import MenuHeader from "../../components/MenuHeader";
import { useState, useEffect } from "react";
import PokemonCard from '../../components/PokemonCard';
import { useHistory } from "react-router-dom";
import s from "./style.module.css";
import database from "../../service/firebase"

const POKEMONS = {
    0: {
        "abilities": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "base_experience": 122,
        "height": 11,
        "weight": 300,
        "id": getRandomInt(100),
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 71
        },
        "type": "normal",
        "values": {
            "top": 7,
            "right": 5,
            "bottom": 1,
            "left": 2
        }
    },
    1: {
        "abilities": [
            "intimidate",
            "shed-skin",
            "unnerve"
        ],
        "base_experience": 157,
        "height": 35,
        "weight": 650,
        "id": getRandomInt(100),
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "name": "arbok",
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "special-attack": 65,
            "special-defense": 79,
            "speed": 80
        },
        "type": "poison",
        "values": {
            "top": 6,
            "right": "A",
            "bottom": 2,
            "left": 8
        }
    },
    2: {
        "abilities": [
            "static",
            "lightning-rod"
        ],
        "base_experience": 112,
        "height": 4,
        "weight": 60,
        "id": getRandomInt(100),
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "name": "pikachu",
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 90
        },
        "type": "electric",
        "values": {
            "top": 6,
            "right": 5,
            "bottom": 1,
            "left": 5
        }
    },
    3: {
        "abilities": [
            "overgrow",
            "chlorophyll"
        ],
        "base_experience": 64,
        "height": 7,
        "weight": 69,
        "id": getRandomInt(100),
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "name": "bulbasaur",
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special-attack": 65,
            "special-defense": 65,
            "speed": 45
        },
        "type": "grass",
        "values": {
            "top": 2,
            "right": 2,
            "bottom": 1,
            "left": 4
        }
    },
    4: {
        "abilities": [
            "blaze",
            "solar-power"
        ],
        "base_experience": 62,
        "height": 6,
        "weight": 85,
        "id": getRandomInt(100),
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "name": "charmander",
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "special-attack": 60,
            "special-defense": 50,
            "speed": 65
        },
        "type": "fire",
        "values": {
            "top": 1,
            "right": 1,
            "bottom": 2,
            "left": 1
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const GamePage = () => {
    const history = useHistory()
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            // console.log('snapshot', snapshot.val())
            setPokemons(snapshot.val());
            // console.log('snapshot .val()', snapshot.val().keyId)
        })
    }, [])

    const handleClick = (keyId, isActive, id) => {
        // console.log('keyyyyyyyy', keyId)
        // console.log(isActive)

        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active === true ? pokemon.active = false : pokemon.active = true
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });
        database.ref('pokemons/' + keyId).update({
            active: !isActive
        });
    }

    const handleAddPokemon = (id) => {
        console.log(POKEMONS[1])
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(POKEMONS[getRandomInt(4)]);
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] };
                if (pokemon.id === id) {
                    pokemon.active === true ? pokemon.active = false : pokemon.active = true
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })

    }
    const handleRemovePokemon = (keyId) => {
        database.ref('pokemons/' + keyId).remove()
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
        console.log(keyId)
    }

    const handleClickButton = () => {
        // onChangePage && onChangePage('app')
        history.push("/")

    }
    return (
        <>
            <div className={s.container}>
                <button onClick={handleAddPokemon}>Add New Pokemon</button>
            </div>
            <div className={s.flex} >
                {
                    Object.entries(pokemons).map(([key, { name, img, id, type, values, active }]) => (<PokemonCard
                        key={key}
                        keyId={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={active}
                        onClickCard={handleClick}
                        removeCard={handleRemovePokemon}
                    />))}
            </div>
            <div className={s.container}>
                <button onClick={handleClickButton}>HomePage</button>
            </div>
        </>

    )
}

export default GamePage;
