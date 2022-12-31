import React from "react";
import { Input, Box, Flex, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";

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
            <HStack w="full" justify="space-between" alignItems="center">
                <MobileSideMenu />
            </HStack>
        </VStack>
    );
}

function SocialLinks() {
    return <Flex ml="8" color="gray.700" gap="5" display={{ base: "none", lg: "flex" }}></Flex>;
}

function SearchBar() {
    return (
        <Box mr="8" pos="relative" display={{ base: "none", lg: "flex" }}>
            <Input
                width="280px"
                placeholder="Search"
                px="4"
                rounded="full"
                bg="gray.200"
                size="md"
                _placeholder={{
                    fontWeight: "600",
                    color: "gray.700"
                }}
            />
            <FaSearch
                size="13px"
                style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-57%)",
                    right: "5%",
                    zIndex: "2",
                    color: "#959595"
                }}
            />
        </Box>
    );
}
