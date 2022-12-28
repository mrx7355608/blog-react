import { FaHome, FaNode, FaDocker, FaGitAlt, FaReact, FaLeaf } from "react-icons/fa";
import { VStack, Text, Flex } from "@chakra-ui/react";

export default function MobileSideMenuLinks() {
    return (
        <VStack mt="9" alignItems="start">
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaHome display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    Home
                </Text>
            </Flex>
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaNode display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    Nodejs
                </Text>
            </Flex>
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaDocker display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    Docker
                </Text>
            </Flex>
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaGitAlt display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    Git
                </Text>
            </Flex>
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaReact display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    React
                </Text>
            </Flex>
            <Flex
                _hover={{
                    cursor: "pointer"
                }}
                alignItems="center"
                gap="3">
                <FaLeaf display="inline" />
                <Text
                    _hover={{
                        color: "red.600"
                    }}
                    fontWeight="400"
                    fontSize="2xl"
                    as="span">
                    MongoDB
                </Text>
            </Flex>
        </VStack>
    );
}
