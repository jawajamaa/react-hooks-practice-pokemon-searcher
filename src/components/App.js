import React, { createContext } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

export const PokemonContext = createContext([]);
