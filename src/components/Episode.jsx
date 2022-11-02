import { useQuery } from "@tanstack/react-query";

async function getEpisodesById(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Episode({ url }) {
  const { data, isLoading } = useQuery(["episodes", url], () =>
    getEpisodesById(url)
  );

  if (isLoading) return <div>loading</div>;

  return (
    <li>
      {data.episode} -{data.name}
    </li>
  );
}
