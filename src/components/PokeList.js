import "../stylesheets/PokeList.scss";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const allPokemons = props.pokemonData.map((eachPokemon) => {
    return (
      <li key={props.pokemonData.id} className="list__item">
        <Pokemon eachPokemon={eachPokemon} />
      </li>
    );
  });

  return <ul className="list">{allPokemons}</ul>;
};

export default PokeList;
