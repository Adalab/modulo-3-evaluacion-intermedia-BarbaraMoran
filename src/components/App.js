import { useState } from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemonData from "../data/pokemonData.json";

const App = (props) => {
  const [pokemons] = useState(pokemonData);
  return (
    <div className="App">
      <h1 className="title"> Mi lista de Pokemon</h1>
      <PokeList pokemonData={pokemons} />
    </div>
  );
};

export default App;
