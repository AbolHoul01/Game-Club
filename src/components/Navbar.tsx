import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png"
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar (){
    return(
        //HStack => horizontal stack
        <HStack> 
            <Image src={logo} boxSize='65px' />
            <ColorModeSwitch />
        </HStack>
    )
}