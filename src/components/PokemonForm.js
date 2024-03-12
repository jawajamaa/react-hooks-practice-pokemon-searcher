import React, { useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { PokemonContext } from "./App";

function PokemonForm({ baseUrl }) {
  const { pokemonPassel, setPokemonPassel } = useContext(PokemonContext);
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      frontUrl: "",
      backUrl: ""
    }
  });
  const {name, hp, sprites} = formData;
  const {frontUrl, backUrl} = sprites;

  function handleChange(evt) {
    console.log(evt.target.value);
    if (evt.target.name === "frontUrl" || evt.target.name === "backUrl") {
      const newSprites = {...sprites,
        [evt.target.name] : evt.target.value }
      setFormData({...formData,
        sprites : newSprites })
    } else {
      setFormData({...formData,
        [evt.target.name] : evt.target.value})
    }
  }
  console.log(formData);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitting form...");

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        "name": name,
        "hp": parseInt(hp),
        "sprites": {
          "front": frontUrl,
          "back" : backUrl
        }
      })
    })
      .then(r => r.json())
      .then(data => {
        setPokemonPassel([
          ...pokemonPassel, data
        ])
      })
      setFormData({
        name: "",
        hp: "",
        sprites: {
          frontUrl: "",
          backUrl: ""
        }
      });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name"
            value = { name }
            onChange = { handleChange } 
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value = { hp }
            onChange = { handleChange }
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value = { frontUrl }
            onChange = { handleChange }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = { backUrl }
            onChange = { handleChange }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
