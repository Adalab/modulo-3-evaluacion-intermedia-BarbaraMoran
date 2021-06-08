import React from "react";
import "../stylesheets/App.scss";
import PokeList from "./PokeList";
import pokemonData from "../data/pokemonData.json";
//import { useState } from "react";

const App = () => {
  //const [pokemonData, setPokemonData] = useState([pokemonData]);
  return (
    <div className="App">
      <h1 className="title"> Mi lista de Pokemon</h1>
      <PokeList pokemonData={pokemonData} />
    </div>
  );
};

export default App;
