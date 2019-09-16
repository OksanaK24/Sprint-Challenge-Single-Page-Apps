import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res =>{
        setEpisode(res.data.results)
       })
      .catch (err => console.log ("Try to fix your code"))
  }, []);

  return (
    <section className="character-list grid-view">
        {episodes.map((epi) => {
          return <div>
              <EpisodeCard key={epi.name} name={epi.name} air_date={epi.air_date}
                episode={epi.episode} characters={epi.characters} />
            </div>
        })}
    </section>
  );
}
