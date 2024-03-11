import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { PokemonContext } from "./App";

function PokemonCollection({ search }) {
  const { pokemonPassel } = useContext(PokemonContext);

  const pokemonSearch = pokemonPassel.filter(pokemon => {
    return pokemon.name.includes(search) 
  })

  return (
    <Card.Group itemsPerRow={6}>
      { pokemonSearch.map(pokemon => (
        <PokemonCard
          key = { pokemon.id } 
          pokemon = { pokemon }
        />
      )) }
    </Card.Group>
  );
}

export default PokemonCollection;
