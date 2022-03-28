import React, { useEffect, useState } from "react";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon.length > 0 &&
        pokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <span style={{ fontWeight: "bold" }}>
                {index + 1}
                {". "}
              </span>
              <span style={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </span>
              <hr/>
            </div>
          );
        })}
    </div>
  );
};
export default Pokemon;
