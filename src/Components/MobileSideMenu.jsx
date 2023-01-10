import React from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Flex,
    Button,
    Heading,
    Text
} from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function MobileSideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button bg="gray.700" mr="3" px="0" ref={btnRef} onClick={onOpen}>
                <FaBars color="white" size="18px" />
            </Button>
            <Drawer
                size="full"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Flex
                            justify="center"
                            h="70vh"
                            mt="9"
                            alignItems="center"
                            direction="column"
                            gap="3">
                            <Heading fontSize="5xl" color="red.600" mt="9">
                                Menu
                            </Heading>
                            <Link to="/">
                                <Text
                                    mt="5"
                                    _hover={{
                                        cursor: "pointer",
                                        color: "red.500"
                                    }}
                                    fontWeight="400"
                                    fontSize="2xl">
                                    Home
                                </Text>
                            </Link>
                            <Link to="/about">
                                <Text
                                    _hover={{
                                        cursor: "pointer",
                                        color: "red.500"
                                    }}
                                    fontWeight="400"
                                    fontSize="2xl">
                                    About Me
                                </Text>
                            </Link>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <ContactLinks />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

function ContactLinks() {
    return (
        <Flex mx="auto" alignItems="center" gap="4">
            <FaFacebook
                style={{
                    display: "inline"
                }}
            />
            <FaInstagram
                style={{
                    display: "inline"
                }}
            />
            <FaTwitter
                style={{
                    display: "inline"
                }}
            />
            <FaGithub
                style={{
                    display: "inline"
                }}
            />
            <FaEnvelope
                style={{
                    display: "inline"
                }}
            />
        </Flex>
    );
}
