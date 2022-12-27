import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    Flex,
    Button,
    Box,
    Heading
} from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button
                bg="transparent"
                display={{ md: "none" }}
                size={{ base: "sm", md: "md" }}
                m="0"
                ref={btnRef}
                onClick={onOpen}>
                <FaBars size="18px" />
            </Button>
            <Drawer
                size="full"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent color="red.600">
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Flex mt="9" alignItems="center" direction="column" gap="3">
                            <Heading mt="9">Menu</Heading>
                            <Text mt="6" fontWeight="700" fontSize="2xl">
                                Home
                            </Text>
                            <Text fontWeight="700" fontSize="2xl">
                                Technologies
                            </Text>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter mr="auto">
                        <ContactLinks />
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

function ContactLinks() {
    return (
        <Flex alignItems="start" gap="4" direction="column">
            <Flex gap="2" alignItems="Center">
                <FaFacebook
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Facebook
                </Text>
            </Flex>
            <Flex gap="2" alignItems="Center">
                <FaInstagram
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="800" as="span">
                    Instagram
                </Text>
            </Flex>
            <Flex gap="2" alignItems="Center">
                <FaTwitter
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Twitter
                </Text>
            </Flex>
            <Flex gap="2" alignItems="Center">
                <FaGithub
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Github
                </Text>
            </Flex>
            <Flex gap="2" alignItems="Center">
                <FaEnvelope
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    mrx7355608@gmail.com
                </Text>
            </Flex>
        </Flex>
    );
}
