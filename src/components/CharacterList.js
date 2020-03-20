import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rick-api.herokuapp.com/api/")
      .then(response => {
        console.log("This is the axios call", response);
        setData(response);
      })
      .catch(error => {
        console.log("Unable to retrieve data", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {data.map(item => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </section>
  );
}
