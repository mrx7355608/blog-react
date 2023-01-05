import React from "react";
import { Box, Input, Flex, Text, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <VStack
            style={{
                boxShadow: "0px 3px 5px rgba(198,198,198,0.4)"
            }}
            mx="auto"
            as="header"
            w="full"
            bg="white"
            p="3">
            <Heading fontSize="5xl" color="red.500">
                Just A Dev
            </Heading>
            <Divider />
            <HStack gap="3" py="3">
                <FaFacebook size="16px" />
                <FaInstagram size="16px" />
                <FaTwitter size="16px" />
                <FaGithub size="16px" />
                <FaEnvelope size="16px" />
            </HStack>
            <Divider />
            <Box w="full" display={{ lg: "none" }}>
                <MobileSideMenu />
                <Input
                    placeholder="Search"
                    fontWeight="600"
                    px="3"
                    size="md"
                    variant="outline"
                    borderColor="gray.600"
                    color="gray.600"
                    w="calc(100% - 65px)"
                />
            </Box>
            <Flex
                py="2"
                display={{ base: "none", lg: "flex" }}
                w="full"
                pos="relative"
                justify="center"
                alignItems="center"
                gap="9">
                <Text fontWeight="600">
                    <Link to="/">HOME</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">PORTFOLIO</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">ABOUT ME</Link>
                </Text>
            </Flex>
        </VStack>
    );
}
