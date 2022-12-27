import React from "react";
import { Input, Box, Flex, Heading } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import MobileSearchBar from "./MobileSearchBar";

export default function Navbar() {
    return (
        <Flex
            shadow="md"
            p="4"
            px="6"
            justify={{ base: "space-between", lg: "space-around" }}
            alignItems="center">
            {/* <SocialLinks /> */}
            <MobileSideMenu />
            <Heading fontSize={{ base: "18px", lg: "25px" }} fontWeight="700">
                Some Guy On Internet
            </Heading>
            <MobileSearchBar />

            {/* <SearchBar /> */}
        </Flex>
    );
}

function SocialLinks() {
    return (
        <Flex color="gray.700" gap="5" display={{ base: "none", lg: "flex" }}>
            <FaFacebook size="18px" />
            <FaInstagram size="18px" />
            <FaTwitter size="18px" />
            <FaGithub size="18px" />
        </Flex>
    );
}

function SearchBar() {
    return (
        <Box pos="relative" display={{ base: "none", lg: "flex" }}>
            <Input
                width="280px"
                placeholder="Search"
                px="4"
                rounded="full"
                bg="gray.100"
                border="0"
                outline="0"
                _placeholder={{
                    fontWeight: "700",
                    color: "gray.700"
                }}
            />
            <FaSearch
                size="14px"
                style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-54%)",
                    right: "5%",
                    zIndex: "2",
                    color: "gray"
                }}
            />
        </Box>
    );
}
