import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res =>{
        setLocation(res.data.results)
       })
      .catch (err => console.log ("Try to fix your code"))
  }, [location]);

  return (
    <section className="character-list grid-view">
        {location.map((loc) => {
          return <div>
              <LocationCard key={loc.name} name={loc.name} type={loc.type} 
                dimension={loc.dimension} residents={loc.residents} />
            </div>
        })}
    </section>
  );
}
