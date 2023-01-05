import React from "react";
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
import {
    FaBars,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaEnvelope,
    FaArrowDown
} from "react-icons/fa";

export default function MobileSideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button mr="3" bg="gray.700" ref={btnRef} onClick={onOpen}>
                <FaBars color="white" size="18px" />
            </Button>
            <Drawer
                size="full"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent color="gray.700">
                    <DrawerCloseButton color="gray.800" />

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

                            <Text
                                mt="5"
                                _hover={{
                                    cursor: "pointer",
                                    color: "red.600"
                                }}
                                fontWeight="400"
                                fontSize="2xl">
                                Home
                            </Text>
                            <Text
                                _hover={{
                                    cursor: "pointer",
                                    color: "red.600"
                                }}
                                fontWeight="400"
                                fontSize="2xl">
                                About Me
                            </Text>
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
