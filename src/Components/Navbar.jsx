import React from "react";
import { Input, Box, Flex, Heading } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import MobileSearchBar from "./MobileSearchBar";

export default function Navbar() {
    return (
        <Flex shadow="md" p="4" justify="space-between" alignItems="center">
            <SocialLinks />
            <MobileSideMenu />
            <Heading fontSize={{ base: "18px", md: "20px", lg: "22px" }} fontWeight="700">
                Some Guy On Internet
            </Heading>
            <MobileSearchBar />

            <SearchBar />
        </Flex>
    );
}

function SocialLinks() {
    return (
        <Flex ml="8" color="gray.700" gap="5" display={{ base: "none", lg: "flex" }}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaEnvelope />
        </Flex>
    );
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
