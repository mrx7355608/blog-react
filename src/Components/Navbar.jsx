import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <Flex p="4" px="6" justify="space-between" alignItems="center">
            <Button>
                <FaBars />
            </Button>
            <Heading fontFamily={"Rajdhani"} fontWeight="700">
                Some Guy On Internet
            </Heading>
            <Button colorScheme="red">
                <FaSearch />
            </Button>
        </Flex>
    );
}
