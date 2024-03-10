import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { PokemonContext } from "./App";

function PokemonCollection() {
  const { pokemonPassel } = useContext(PokemonContext);



  return (
    <Card.Group itemsPerRow={6}>
      { pokemonPassel.map(pokemon => (
        <PokemonCard
          key = { pokemon.id } 
          pokemon = { pokemon }
        />
      )) }
    </Card.Group>
  );
}

export default PokemonCollection;
