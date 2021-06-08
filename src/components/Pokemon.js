import "../stylesheets/Pokemon.scss";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.eachPokemon.types.map((type) => {
      return <li className="type">{type}</li>;
    });
  };
  return (
    <>
      <img
        className="img"
        src={props.eachPokemon.url}
        alt={props.eachPokemon.name}
        title={props.eachPokemon.name}
      />
      <h2 className="info__name">{props.eachPokemon.name}</h2>
      <ul className="info__types">{renderTypes()}</ul>
    </>
  );
};

export default Pokemon;
