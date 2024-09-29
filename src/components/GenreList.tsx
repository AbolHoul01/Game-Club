import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { link } from "fs";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; 
}

export default function GenreList({ onSelectedGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace='normal'
                textAlign='left'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List> 
    </>
  );
}
