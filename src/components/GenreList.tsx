import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
