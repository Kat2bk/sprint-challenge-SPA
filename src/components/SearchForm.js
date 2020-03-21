import React, { useState, useEffect } from "react";

export default function SearchForm({ items }) {
  const [searching, setSearching] = useState("");
  console.log("this is the data", items);
  const handleChange = event => {
    event.preventDefault();
    setSearching(event.target.value);
  };

    const searchCharacters = items.filter(character =>
      character.toLowerCase().includes(searching.toLowerCase())
    );

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="search" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
