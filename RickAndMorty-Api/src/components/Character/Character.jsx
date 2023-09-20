import { useEffect, useState } from "react";

export function Character() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <ul>
      {character.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
}
