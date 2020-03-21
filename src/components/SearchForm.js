import React, { useState, useEffect } from "react";

export default function SearchForm({ items }) {
  const [searching, setSearching] = useState("");
  const handleChange = event => {
    setSearching(event.target.value);
  };

  // const searchCharacters = items.filter(character =>
  //   character.toLowerCase().includes(searching.toLowerCase())
  // );

 function renderCharacters(characters) {
    const search = this.state;
    var data = characters.data.toLowerCase();

    if (
      search !== "" &&
      items.name.toLowerCase().indexOf(search.toLOwerCase()) === -1
    )
      return null;
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" name="search" onChange={handleChange} />
      </form>
    </section>
  );
}
