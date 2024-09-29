import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch : (searchText : string) => void
}

export default function Navbar({ onSearch } : Props) {
  return (
    //HStack => horizontal stack
    <HStack padding="10px">
      <Image src={logo} boxSize="65px" />
      <SearchInput onSearch = {onSearch} />
      <ColorModeSwitch  />
    </HStack>
  );
}
