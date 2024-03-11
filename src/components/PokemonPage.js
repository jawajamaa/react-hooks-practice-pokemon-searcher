import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { PokemonContext } from "./App";  

function PokemonPage() {
  const baseUrl = "http://localhost:3001/pokemon/";
  const [pokemonPassel, setPokemonPassel] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() =>{
    fetch(baseUrl)
      .then(r => r.json())
      .then(setPokemonPassel)
  }, [])
  
  console.log(pokemonPassel);

  return (
    <PokemonContext.Provider value = { {pokemonPassel, setPokemonPassel} }>
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          baseUrl = { baseUrl } 
          />
        <br />
        <Search 
          search = {  search } 
          setSearch = { setSearch }
        />
        <br />
        <PokemonCollection 
          search = {  search } 
        />
      </Container>
    </PokemonContext.Provider>
  );
}

export default PokemonPage;
