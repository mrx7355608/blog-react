import { Text, Heading, Flex, Tag, Divider } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Blog({ blog }) {
    return (
        <Flex bg="transparent" my="9" direction="column">
            <Text fontSize={{ base: "md", lg: "lg" }} color="gray.500" fontWeight={600}>
                {new Date(blog.createdAt).toDateString()}
            </Text>
            <Heading lineHeight={1} fontSize="4xl" fontFamily="Rajdhani" mt="2" fontWeight="700">
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
                            letterSpacing={0.3}
                            borderRadius="md"
                            variant="outline"
                            color="gray.600"
                            border="gray.700">
                            <Text fontWeight={700}>
                                {tag.substring(1, 0).toUpperCase() + tag.substring(1)}
                            </Text>
                        </Tag>
                    );
                })}
            </Flex>
            <Text
                letterSpacing={0.5}
                fontSize="18px"
                lineHeight={1.4}
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
                <Link to={"/blog/" + blog._id}>Read more</Link>
            </Text>
            <Divider mt="6" />
        </Flex>
    );
}
