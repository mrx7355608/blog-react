import React from "react";
import { Heading, Flex, Container, Spinner } from "@chakra-ui/react";

import DesktopSearchbar from "../Components/Searchbar";
import BlogCard from "../Components/BlogCard";
import useFetch from "../Hooks/useFetch";

export default function Home() {
    const { loading, data: blogs, error } = useFetch("http://localhost:8000/api/v1/blogs");

    return (
        <Container maxW="700px" py="6">
            <DesktopSearchbar />
            {error ? <Heading>{error.message}</Heading> : null}
            {loading ? (
                <Flex mt="9" w="full" justify="center">
                    <Spinner />
                </Flex>
            ) : null}
            {blogs && !loading
                ? blogs.map((blog) => {
                      return <BlogCard key={blog._id} blog={blog} />;
                  })
                : null}
        </Container>
    );
}
