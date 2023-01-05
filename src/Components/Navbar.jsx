import React from "react";
import { Button, Input, Flex, Text, Heading, VStack, Divider, HStack } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import MobileSideMenu from "./MobileSideMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <VStack mx="auto" as="header" w="full" bg="white" p="3">
            <Heading fontSize="5xl" color="red.500">Just A Dev</Heading>
            <Divider />
            <HStack gap="3" py="3">
                <FaFacebook size="16px" />
                <FaInstagram size="16px" />
                <FaTwitter size="16px" />
                <FaGithub size="16px" />
                <FaEnvelope size="16px" />
            </HStack>
            <Divider />
			<Box w="full" display={{ lg: "none" }} >
            	<MobileSideMenu />
				<Input
					ml="full"
					placeholder="Search"
					fontWeight="600"
					px="3"
					size="md"
					variant="outline"
					borderColor="gray.600"
					color="gray.600"
					w="80%"
				/>
			</Box>
            <Flex py="2" display={{ md: "none", lg: "flex" }} pos="relative" w="full" justify="center" alignItems="center" gap="9">
                <Text fontWeight="600">
                    <Link to="/">HOME</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">PORTFOLIO</Link>
                </Text>
                <Text fontWeight="600">
                    <Link to="/">ABOUT ME</Link>
                </Text>
				<Input
					pos="absolute"
					right="0"
					placeholder="Search"
					fontWeight="600"
					px="3"
					pr="7"
					size="md"
					variant="outline"
					w="30%"
					borderColor="gray.600"
					color="gray.600"
					
				/>
            </Flex>
        </VStack>
    );
}
