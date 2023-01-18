import React from "react";
import {
    useClipboard,
    Link as ChakraLink,
    Box,
    Flex,
    Text,
    Heading,
    HStack
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";
import useShowToast from "../Hooks/useShowToast";

export default function Navbar() {
    const { onCopy } = useClipboard("mrx7355608@gmail.com");
    const showToast = useShowToast();

    return (
        <HStack
            as="header"
            shadow="lg"
            justify={{ base: "space-between", lg: "space-around" }}
            w="full"
            bg="transparent"
            p="4">
            <Heading fontSize="4xl" color="red.600">
                <Link to="/">Blog</Link>
            </Heading>
            <Box display={{ lg: "none" }}>
                <MobileSideMenu />
            </Box>
            <HStack display={{ base: "none", lg: "flex" }} gap="4" py="2">
                <ChakraLink href="https://www.facebook.com/fdas23/" isExternal>
                    <FaFacebook size="16px" />
                </ChakraLink>
                <ChakraLink href="https://www.instagram.com/fawadimran/" isExternal>
                    <FaInstagram size="16px" />
                </ChakraLink>
                <ChakraLink href="https://twitter.com/MrX7355608" isExternal>
                    <FaTwitter size="16px" />
                </ChakraLink>
                <ChakraLink href="https://github.com/mrx7355608" isExternal>
                    <FaGithub size="16px" />
                </ChakraLink>
                <ChakraLink>
                    <FaEnvelope
                        onClick={() => {
                            onCopy();
                            showToast("Email has been copied to clipboard", "info");
                        }}
                        size="16px"
                    />
                </ChakraLink>
            </HStack>
        </HStack>
    );
}
