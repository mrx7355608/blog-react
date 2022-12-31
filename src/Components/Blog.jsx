import { Button, Text, Heading, Flex, Tag } from "@chakra-ui/react";
import React from "react";

export default function Blog() {
    return (
        <Flex bg="transparent" mt="9" direction="column" p="5">
            <Text color="gray.500" fontWeight={600}>
                11/02/2022
            </Text>
            <Heading
                color="red.600"
                lineHeight={1}
                fontSize="2xl"
                fontFamily="Rajdhani"
                mt="2"
                fontWeight="700">
                Mini Redux with Context API and useReducer
            </Heading>
            <Flex wrap="wrap" mt="2" gap="1">
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    borderRadius="full"
                    variant="outline"
                    color="gray.700"
                    border="gray.700">
                    <Text fontWeight={700}>Docker</Text>
                </Tag>
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    borderRadius="full"
                    variant="outline"
                    color="gray.700"
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
                we can't use state ....
            </Text>
            <Button
                size="sm"
                mt="3"
                fontWeight={700}
                colorScheme="blue"
                variant="link"
                w="max-content"
                borderRadius="md">
                Read more
            </Button>
        </Flex>
    );
}
