import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <hr />
      <img src={props.data.image} />
      <h1>Name: {props.data.name}</h1>
      <h2>Gender: {props.data.gender}</h2>
      <h2>Species: {props.data.species}</h2>
    </div>
  );
}
