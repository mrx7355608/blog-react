import React, { useState } from "react";
import { Heading, Flex, Container, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import Searchbar from "../Components/Searchbar";
import BlogCard from "../Components/BlogCard";
import useFetch from "../Hooks/useFetch";
import TagsList from "../Components/TagsList";
import appConfig from "../../config/appConfig";
import usePagination from "../Hooks/usePagination";

export default function Home() {
    const [url, setUrl] = useState(`${appConfig.apiUrl}/blogs?`);
    const { loading, data, error } = useFetch(url);
    const { isMoreContent, blogs, paginate } = usePagination({ url, setUrl, loading, error, data });

    return (
        <Container maxW="700px" py="6">
            <Searchbar url={url} setUrl={setUrl} />
            {loading || error || blogs.length < 1 ? null : (
                <TagsList blogs={blogs} url={url} setUrl={setUrl} />
            )}
            {error ? <Heading my="9">{error.message}</Heading> : null}
            {loading ? (
                <Flex mt="9" w="full" justify="center">
                    <Spinner />
                </Flex>
            ) : null}
            {blogs && !loading && !error ? (
                <InfiniteScroll
                    dataLength={blogs.length}
                    hasMore={isMoreContent}
                    next={paginate}
                    loader={<Spinner />}
                    endMessage={<Heading color="gray.700">End</Heading>}>
                    {blogs.map((blog) => {
                        return <BlogCard key={blog._id} blog={blog} />;
                    })}
                </InfiniteScroll>
            ) : null}
        </Container>
    );
}
