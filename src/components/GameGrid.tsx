import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
<<<<<<< Updated upstream
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={10}
        spacing={10}
      >
        {games.map((game) => (
=======
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={10} spacing={10}>
        {games.map(game => (
>>>>>>> Stashed changes
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
