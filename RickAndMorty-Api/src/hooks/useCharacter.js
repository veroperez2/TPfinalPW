export function userCharacter() {
  const [allCharacters, setAllCharacter] = useState([]);

  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((reponse) => reponse.json())
      .then((data) => setAllCharacter(data.results));
  };
  return {
    getAllCharacters,
  };
}
