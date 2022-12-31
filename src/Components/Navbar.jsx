import React from "react";
import { Box, Button, Input, Flex, Text, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <VStack mx="auto" as="header" w="full" bg="white" p="3">
            <Heading color="red.500">Just A Dev</Heading>
            <Divider />
            <HStack gap="3" py="2">
                <FaFacebook size="14px" />
                <FaInstagram size="14px" />
                <FaTwitter size="14px" />
                <FaGithub size="14px" />
                <FaEnvelope size="14px" />
            </HStack>
            <Divider />
            <MobileSideMenu />
            <Flex alignItems="center" gap="9">
                <Text fontWeight="600">
                    <Link to="/">Home</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Nodejs</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Git</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Docker</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Expressjs</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Security</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">Code</Link>
                </Text>

                <Flex alignItems="center" gap="2">
                    <Input
                        placeholder="Search"
                        fontWeight="600"
                        px="3"
                        pr="7"
                        size="sm"
                        variant="flushed"
                    />
                    <Button variant="ghost" size="sm" colorScheme={"red"}>
                        <FaSearch />
                    </Button>
                </Flex>
            </Flex>
        </VStack>
    );
}
