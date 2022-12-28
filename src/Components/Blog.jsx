import { Button, Text, Heading, Flex, Tag } from "@chakra-ui/react";
import React from "react";

export default function Blog() {
    return (
        <Flex
            bg="white"
            mt="6"
            border="1px"
            borderColor="gray.200"
            rounded="lg"
            shadow="md"
            direction="column"
            p="5">
            <Text color="gray.500" fontWeight={600}>
                11/02/2022
            </Text>
            <Heading lineHeight={1} fontSize="2xl" fontFamily="Rajdhani" mt="2" fontWeight="700">
                Mini Redux with Context API and useReducer
            </Heading>
            <Flex wrap="wrap" mt="2" gap="1">
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    fontSize="xs"
                    borderRadius="full"
                    variant={"outline"}
                    colorScheme="red">
                    <Text fontWeight={700}>Node</Text>
                </Tag>
                <Tag
                    fontFamily="Rajdhani"
                    px="3"
                    fontSize="xs"
                    borderRadius="full"
                    variant={"outline"}
                    colorScheme="red">
                    <Text fontWeight={700}>Expressjs</Text>
                </Tag>
            </Flex>
            <Text
                letterSpacing={0.5}
                fontSize="16px"
                lineHeight={1.6}
                color="gray.600"
                fontWeight={500}
                mt="3.5">
                Redux no doubt is a great tool for state management, but every tool cannot be used
                everywhere, it might be an overkill if we used redux in a medium level project. But
                we can't use state ....
            </Text>
            <Button size="sm" mt="9" fontWeight={700} colorScheme="red" borderRadius="md">
                Read
            </Button>
        </Flex>
    );
}
