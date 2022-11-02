import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

async function getCharacterById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();

  return data;
}

const Details = () => {
  const { characterId } = useParams();
  const { data, isLoading } = useQuery(["characters", characterId], () =>
    getCharacterById(characterId)
  );

  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} />
      <p>{data.species}</p>
      <p>{data.gender}</p>
    </div>
  );
};
export default Details;
