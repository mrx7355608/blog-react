import React from "react";
import {
    useClipboard,
    Link as ChakraLink,
    Box,
    Flex,
    Text,
    Heading,
    HStack,
    useToast
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { onCopy } = useClipboard("mrx7355608@gmail.com");
    const toast = useToast();

    const showToast = () => {
        return toast({
            title: "Email copied to clipboard!",
            status: "info",
            variant: "left-accent",
            isClosable: true,
            position: "bottom",
            duration: 5000
        });
    };

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
                <Link to="/">Just A Dev</Link>
            </Heading>
            <Box display={{ lg: "none" }}>
                <MobileSideMenu />
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
                    <Link to="/about">ABOUT ME</Link>
                </Text>
            </Flex>
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
                            showToast();
                        }}
                        size="16px"
                    />
                </ChakraLink>
            </HStack>
        </HStack>
    );
}
