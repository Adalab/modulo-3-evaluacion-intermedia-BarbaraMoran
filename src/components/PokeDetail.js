//import "../stylesheets/Poke.scss";
import React from "react";

const PokeDetail = (props) => {
  return (
    <>
      <img
        className="item__img"
        src={props.pokeData.url}
        alt={props.pokeData.name}
        title={props.pokeData.name}
      />
      <h2 className="item__name">{props.pokeData.name}</h2>
      {/*<ul className="item__types">{renderTypes()}</ul>*/};
    </>
  );
};

export default PokeDetail;
