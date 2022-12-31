import { Text, Heading, Flex, Tag, Divider } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <Flex bg="transparent" my="9" direction="column">
            <Text color="gray.500" fontWeight={600}>
                11/02/2022
            </Text>
            <Heading lineHeight={1} fontSize="4xl" fontFamily="Rajdhani" mt="2" fontWeight="700">
                Mini Redux with Context API and useReducer
            </Heading>
            <Flex wrap="wrap" mt="2" gap="1">
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    borderRadius="full"
                    variant="outline"
                    color="gray.600"
                    border="gray.700">
                    <Text fontWeight={700}>Docker</Text>
                </Tag>
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    borderRadius="full"
                    variant="outline"
                    color="gray.600"
                    border="gray.700">
                    <Text fontWeight={700}>Expressjs</Text>
                </Tag>
            </Flex>
            <Text
                letterSpacing={0.5}
                fontSize="16px"
                lineHeight={1.6}
                color="gray.700"
                fontWeight={500}
                mt="3.5">
                Redux no doubt is a great tool for state management, but every tool cannot be used
                everywhere, it might be an overkill if we used redux in a medium level project. But
                we can not use state ....
            </Text>
            <Text
                size={["sm", "md"]}
                mt="3"
                fontWeight={700}
                color="red.500"
                w="max-content"
                p="0"
                borderRadius="md">
                <Link to="">Read more</Link>
            </Text>
            <Divider mt="6" />
        </Flex>
    );
}
