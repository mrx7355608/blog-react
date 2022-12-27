import { Button, Text, Heading, Flex, Tag } from "@chakra-ui/react";
import React from "react";

export default function Blog() {
    return (
        <Flex border="1px" borderColor="gray.200" rounded="lg" shadow="md" direction="column" p="5">
            <Text fontWeight={600}>11/02/2022</Text>
            <Heading lineHeight={1} fontSize="2xl" fontFamily="Rajdhani" mt="2" fontWeight="700">
                Mini Redux with Context API and useReducer
            </Heading>
            <Flex mt="2" gap="2">
                <Tag
                    fontFamily="Rajdhani"
                    px="4"
                    size="md"
                    borderRadius="full"
                    variant={"outline"}
                    colorScheme="red">
                    <Text fontWeight={700}>Node</Text>
                </Tag>
                <Tag
                    fontFamily="Rajdhani"
                    px="4"
                    size="md"
                    borderRadius="full"
                    variant={"outline"}
                    colorScheme="red">
                    <Text fontWeight={700}>Expressjs</Text>
                </Tag>
            </Flex>
            <Text
                letterSpacing={0.4}
                lineHeight={1.6}
                color="gray.600"
                fontFamily={"Roboto"}
                // fontSize="md"
                fontWeight={500}
                mt="5">
                Redux no doubt is a great tool for state management, but every tool cannot be used
                everywhere, it might be an overkill if we used redux in a medium level project. But
                we can't use state ....
            </Text>
            <Button
                size="sm"
                w="80px"
                mt="8"
                fontWeight={600}
                colorScheme="red"
                borderRadius="full">
                Read
            </Button>
        </Flex>
    );
}
