import s from "./style.module.css"
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import PlayerBoard from "../Board/component/PlayerBoard";
const FinishPage = ({ cards, player, ab }) => {
    const history = useHistory()
    // const [abc, setBoard] = useState({});
    // useEffect(() => {
    //     setBoard(ab)
    // }, [])
    console.log('card', cards)
    console.log(player);
    console.log('babab', ab)

    const handleClickus = () => {
        // onChangePage && onChangePage('app')
        history.push("/game")

    }
    const { pokemons } = useContext(PokemonContext)
    const { pokemons2 } = useContext(PokemonContext)
    console.log('pokemons', pokemons)
    console.log('pokemonssssss', Object.values(pokemons))

    return (
        <>
            <div className={s.container}>
                <div className={s.flex}>
                    <PlayerBoard cards={Object.values(pokemons)}
                    />
                </div>
                <button onClick={handleClickus}>END GAME</button>
                <div className={s.flex}>
                    <PlayerBoard cards={pokemons2}
                    />
                </div>
            </div>

        </>

    )
}
export default FinishPage;