import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { genres, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
