import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searching, setSearching] = useState("");

  const handleChange = event => {
    setSearching(event.target.value);
    searchCharacters();
  };

  console.log(searching);

  const searchCharacters = () =>
    props.setState(
      props.data.filter(character =>
        character.name.toLowerCase().includes(searching.toLowerCase())
      )
    );

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="search" onChange={handleChange} />
      </form>
    </section>
  );
}
