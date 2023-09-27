import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";

export function Character() {
  const [getAllCharacter, character] = useCharacter([]);

  useEffect(() => {
    getAllCharacter();
  }, []);

  return (
    <ul>
      {allCharacter.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
}
