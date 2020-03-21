import React from "react";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="link-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characterlist/">
              Characters <CharacterList />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
