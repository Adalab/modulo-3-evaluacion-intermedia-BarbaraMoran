import "../stylesheets/PokeList.scss";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const allPokemons = props.pokemonData.map((eachPokemon) => {
    return (
      <li key={eachPokemon.id} className="list__item">
        <Link to={`/pokeDetail/${eachPokemon.id}`}>
          <Pokemon eachPokemon={eachPokemon} />
        </Link>
      </li>
    );
  });

  return <ul className="list">{allPokemons}</ul>;
};

export default PokeList;
