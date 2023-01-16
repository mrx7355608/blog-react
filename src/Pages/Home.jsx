import React, { useEffect, useState } from "react";
import { Heading, Flex, Container, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import Searchbar from "../Components/Searchbar";
import BlogCard from "../Components/BlogCard";
import useFetch from "../Hooks/useFetch";
import TagsList from "../Components/TagsList";
import appConfig from "../../config/appConfig";
import { UrlQueryGenerator } from "../UrlGenerator";

export default function Home() {
    const [url, setUrl] = useState(`${appConfig.apiUrl}/blogs?`);
    const [page, setPage] = useState(1);
    const [isMoreContent, setIsMoreContent] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const { loading, data, error } = useFetch(url);

    useEffect(() => {
        if (!loading && !error && data) {
            if (data.length < 10) setIsMoreContent(false);
            if (!isMoreContent && !data.length < 10) {
                setPage(1);
                setIsMoreContent(true);
            }
            return setBlogs((prev) => {
                if (!url.includes("page")) {
                    return [...data];
                }
                return [...prev, ...data];
            });
        }
    }, [data]);

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
                    next={() => {
                        const { create } = UrlQueryGenerator({ url, query: "page" });
                        const newQuery = create(page + 1);
                        setPage(page + 1);
                        setUrl(`${appConfig.apiUrl}/blogs?${newQuery}`);
                    }}
                    loader={<Spinner />}
                    endMessage={<Heading>End</Heading>}>
                    {blogs.map((blog) => {
                        return <BlogCard key={blog._id} blog={blog} />;
                    })}
                </InfiniteScroll>
            ) : null}
        </Container>
    );
}
