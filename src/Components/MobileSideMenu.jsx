import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    Flex,
    Button,
    Heading
} from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function MobileSideMenu() {
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
                <DrawerContent color="gray.700">
                    <DrawerCloseButton color="gray.800" />

                    <DrawerBody>
                        <Flex mt="9" alignItems="center" direction="column" gap="3">
                            <Heading color="red.600" mt="9">
                                Menu
                            </Heading>
                            <Text
                                _hover={{
                                    color: "red.600"
                                }}
                                mt="6"
                                fontWeight="700"
                                fontSize="2xl">
                                Home
                            </Text>
                            <Text
                                _hover={{
                                    color: "red.600"
                                }}
                                fontWeight="700"
                                fontSize="2xl">
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
            <Flex
                _hover={{
                    color: "red.600"
                }}
                gap="2"
                alignItems="Center">
                <FaFacebook
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Facebook
                </Text>
            </Flex>
            <Flex
                _hover={{
                    color: "red.600"
                }}
                gap="2"
                alignItems="Center">
                <FaInstagram
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="800" as="span">
                    Instagram
                </Text>
            </Flex>
            <Flex
                _hover={{
                    color: "red.600"
                }}
                gap="2"
                alignItems="Center">
                <FaTwitter
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Twitter
                </Text>
            </Flex>
            <Flex
                _hover={{
                    color: "red.600"
                }}
                gap="2"
                alignItems="Center">
                <FaGithub
                    style={{
                        display: "inline"
                    }}
                />
                <Text fontWeight="700" as="span">
                    Github
                </Text>
            </Flex>
            <Flex
                _hover={{
                    color: "red.600"
                }}
                gap="2"
                alignItems="Center">
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
