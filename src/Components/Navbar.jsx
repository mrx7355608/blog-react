import React from "react";
import { Box, Input, Flex, Text, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <HStack
            style={{
                boxShadow: "0px 1px 6px rgba(198,198,198,0.4)"
            }}
            as="header"
            justify={{ base: "space-between", lg: "space-around" }}
            w="full"
            bg="white"
            p="4">
            <Heading fontSize="4xl" color="red.600">
                Just A Dev
            </Heading>
            <Box display={{ lg: "none" }}>
                <MobileSideMenu />
                {/* <Input
                    placeholder="Search"
                    fontWeight="600"
                    px="3"
                    size="md"
                    variant="outline"
                    borderColor="gray.600"
                    color="gray.600"
                    w="calc(100% - 65px)"
                /> */}
            </Box>
            <Flex
                py="1"
                display={{ base: "none", lg: "flex" }}
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
            <HStack display={{ base: "none", lg: "flex" }} gap="4" py="2">
                <FaFacebook size="16px" />
                <FaInstagram size="16px" />
                <FaTwitter size="16px" />
                <FaGithub size="16px" />
                <FaEnvelope size="16px" />
            </HStack>
        </HStack>
    );
}
