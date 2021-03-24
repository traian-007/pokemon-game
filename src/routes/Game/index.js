import { useRouteMatch, Route, Switch } from "react-router-dom";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import StartPage from "./routes/Start";
import { PokemonContext } from '../../context/pokemonContext'
import { useState } from "react";
const GamePage = () => {
    const [acc, setPokemon] = useState({})
    const match = useRouteMatch();
    const handlerAddPokemon = (key, pokemon) => {
        setPokemon(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState };
                delete copyState[key];

                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }

    return (
        <PokemonContext.Provider value={{ pokemons: acc, addPokemonContext: handlerAddPokemon }}>
            <Switch>
                <Route path={`${match.path}`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>

    );
};
export default GamePage;