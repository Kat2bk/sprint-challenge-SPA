import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log("this is the axios call", response.data.results);
          setData(response.data.results);
          setStateData(response.data.results);
        })
        .catch(error => {
          console.log("server error", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <SearchForm data={data} setState={setStateData}/>
      {stateData.map(item => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </section>
  );
}
