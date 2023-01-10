import { Text, Heading, Flex, Tag, Divider } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function Blog({ blog }) {
    return (
        <Flex bg="transparent" my="9" direction="column">
            <Text fontSize={{ base: "md", lg: "lg" }} color="gray.600" fontWeight={500}>
                {new Date(blog.createdAt).toDateString()}
            </Text>
            <Heading
                color="gray.200"
                lineHeight={1}
                fontSize="4xl"
                fontFamily="Rajdhani"
                mt="2"
                fontWeight="700">
                <Link to={"/blog/" + blog._id}>{blog.title}</Link>
            </Heading>
            <Flex wrap="wrap" mt="2" gap="2">
                {blog.tags.map((tag) => {
                    return (
                        <Tag
                            key={Math.random()}
                            fontFamily="Rajdhani"
                            size={{ base: "md", lg: "lg" }}
                            px="3"
                            letterSpacing={0.7}
                            borderRadius="md"
                            variant="outline">
                            <Text fontWeight={600}>
                                {tag.substring(1, 0).toUpperCase() + tag.substring(1)}
                            </Text>
                        </Tag>
                    );
                })}
            </Flex>
            <Text
                letterSpacing={0.5}
                fontSize="19px"
                lineHeight={1.6}
                color="gray.400"
                fontWeight={500}
                mt="4">
                {parse(blog.body.substring(0, 250))}
            </Text>
            <Text
                fontSize={["sm", "lg"]}
                mt={{ base: "1", lg: "3" }}
                fontWeight={600}
                color="red.400"
                w="max-content"
                p="0"
                borderRadius="md">
                <Link to={"/blog/" + blog._id}>Read more</Link>
            </Text>
            <Divider mt="9" />
        </Flex>
    );
}
