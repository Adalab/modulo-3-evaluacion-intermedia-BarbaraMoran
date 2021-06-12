import { useState } from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import PokeDetail from "./PokeDetail";
import pokemonData from "../data/pokemonData.json";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [pokemons] = useState(pokemonData);

  const renderDetail = (routerProps) => {
    const routerPokeId = routerProps.match.params.id;
    const pokeFound = pokemons.find(
      (pokemon) => pokemon.id === parseInt(routerPokeId)
    );
    console.log(pokeFound);
    console.log(routerPokeId);

    if (pokeFound) {
      return <PokeDetail pokeData={pokeFound} />;
    } else {
      return <h1>"No existe este pokemon"</h1>;
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <h1 className="title"> Mi lista de Pokemon</h1>
          <PokeList pokemonData={pokemons} />
        </div>
      </Route>
      <Route path="/pokeDetail/:id" render={renderDetail} />
    </Switch>
  );
};

export default App;
