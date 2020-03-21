import React, { useState } from "react";

export default function SearchForm(props) {
  const [searching, setSearching] = useState();
  const handleChange = event => {
    event.preventDefault();
    setSearching(event.target.value);
  };

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
