import React, { useContext, useState } from "react";
import { PokemonContext } from "./App";

function Search({ search, setSearch }) {
  // const { pokemonPassel, setPokemonPassel } = useContext(PokemonContext);
  

  function handleChange(evt) {
    setSearch(evt.target.value);
    // setPokemonPassel([...pokemonPassel, search]);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value = { search }
          onChange = { handleChange } 
          />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
