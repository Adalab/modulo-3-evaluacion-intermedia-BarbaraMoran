import "../stylesheets/Pokemon.scss";
import PropTypes from "prop-types";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.eachPokemon.types.map((type) => {
      return <li className="type">{type}</li>;
    });
  };
  return (
    <>
      <img
        className="item__img"
        src={props.eachPokemon.url}
        alt={props.eachPokemon.name}
        title={props.eachPokemon.name}
      />
      <h2 className="item__name">{props.eachPokemon.name}</h2>
      <ul className="item__types">{renderTypes()}</ul>
    </>
  );
};

Pokemon.propTypes = {
  eachPokemon: PropTypes.shape({
    url: PropTypes.string,
    types: PropTypes.array,
  }),
};

export default Pokemon;
