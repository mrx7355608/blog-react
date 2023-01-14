import {
    Flex,
    Tag,
    Text,
    Container,
    Heading,
    Spinner,
    ButtonGroup,
    Button
} from "@chakra-ui/react";
import parse from "html-react-parser";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import React from "react";
import { useParams } from "react-router-dom";
import appConfig from "../../config/appConfig";
import useFetch from "../Hooks/useFetch";

export default function Blog() {
    const { id } = useParams();
    const { loading, data: blog, error } = useFetch(`${appConfig.apiUrl}/blogs/${id}`);

    return (
        <Container py="9" maxW="800px">
            {loading ? <Spinner /> : null}
            {error ? <Heading>{error}</Heading> : null}
            {blog && !loading ? (
                <>
                    <Text color="gray.500" fontWeight={600} fontSize={{ base: "md", lg: "xl" }}>
                        {new Date(blog.createdAt).toDateString()}
                    </Text>
                    <Heading
                        lineHeight={1}
                        fontSize="5xl"
                        fontFamily="Rajdhani"
                        mt="2"
                        fontWeight="700">
                        {blog.title}
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
                                    colorScheme={"red"}>
                                    <Text fontWeight={700}>
                                        {tag.substring(1, 0).toUpperCase() + tag.substring(1)}
                                    </Text>
                                </Tag>
                            );
                        })}
                    </Flex>

                    <Prose>{parse(blog.body)}</Prose>
                </>
            ) : null}
        </Container>
    );
}
