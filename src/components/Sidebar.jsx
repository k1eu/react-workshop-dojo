import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

async function getAllCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data.results;
}

export default function Sidebar() {
  const { data, isLoading } = useQuery(["characters"], getAllCharacters);

  if (isLoading) return <div>loading...</div>;

  return (
    <aside>
      <h2>Characters</h2>
      <ul>
        {data.map((character) => (
          <li key={character.id}>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
