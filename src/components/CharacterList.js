import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res =>{
        setCharacter(res.data.results)
       })
      .catch (err => console.log ("Try to fix your code"))
  }, []);

  return (
    <section className="character-list grid-view">
        {character.map((char) => {
          return <div>
              <CharacterCard key={char.name} image={char.image} name={char.name}
              species={char.species} status={char.status} location={char.location}
              origin={char.origin} episode={char.episode} />
            </div>
        })}
    </section>
  );
}
