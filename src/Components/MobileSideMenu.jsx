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
    Heading
} from "@chakra-ui/react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenuLinks from "./MobileSideMenuLinks";

export default function MobileSideMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button
                bg="transparent"
                size={{ base: "sm" }}
                display={{ lg: "none" }}
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
                            <MobileSideMenuLinks />
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
