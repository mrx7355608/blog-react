import React, { useState } from "react";
import { Heading, Flex, Container, Spinner } from "@chakra-ui/react";

import Searchbar from "../Components/Searchbar";
import BlogCard from "../Components/BlogCard";
import useFetch from "../Hooks/useFetch";
import TagsList from "../Components/TagsList";
import appConfig from "../../config/appConfig";

export default function Home() {
    const [url, setUrl] = useState(`${appConfig.apiUrl}/blogs?`);
    const { loading, data: blogs, error } = useFetch(url);

    return (
        <Container maxW="700px" py="6">
            <Searchbar url={url} setUrl={setUrl} />
            <TagsList url={url} setUrl={setUrl} />
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
