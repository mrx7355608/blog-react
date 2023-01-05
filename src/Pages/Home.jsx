import React from "react";
import { Heading, Flex, Container, Spinner } from "@chakra-ui/react";

import DesktopSearchbar from "../Components/DesktopSearchbar";
import BlogCard from "../Components/BlogCard";
import useBlogs from "../Hooks/useBlogs";

export default function Home() {
    const { loading, blogs, error } = useBlogs();

    return (
        <Container maxW="700px" py="6">
            <DesktopSearchbar />
            {error ? <Heading>{error.message}</Heading> : null}
            {loading ? (
                <Flex w="full" justify="center">
                    <Spinner />
                </Flex>
            ) : null}
            {blogs && !loading
                ? blogs.map((blog) => {
                      return <BlogCard key={blogs._id} blog={blog} />;
                  })
                : null}
        </Container>
    );
}
