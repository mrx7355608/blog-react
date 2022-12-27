import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <Flex shadow="md" p="3" px="6" justify="space-between" alignItems="center">
            <Button bg="transparent" size={{ base: "md", lg: "lg" }} px="0">
                <FaBars size="18px" />
            </Button>
            <Heading fontSize={{ base: "20px", lg: "25px" }} fontWeight="700">
                Some Guy On Internet
            </Heading>
            <Button size="md" p="0" colorScheme="red">
                <FaSearch />
            </Button>
        </Flex>
    );
}
