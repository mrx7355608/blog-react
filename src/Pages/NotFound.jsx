import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
    return (
        <Flex direction="column" minH="100vh" minW="100vw" justify="center" alignItems="center">
            <Heading fontSize="8xl" color="red.500">
                404
            </Heading>
            <Heading fontSize="4xl" color="gray.200">
                Not Found
            </Heading>
        </Flex>
    );
}
