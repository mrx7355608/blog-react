import React, { useEffect, useState } from "react";
import { Flex, Tag } from "@chakra-ui/react";
import { UrlQueryGenerator } from "../UrlGenerator";
import appConfig from "../../config/appConfig";

export default function TagsList({ blogs, setUrl, url }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const newarr = [];
        blogs.forEach((blog) => {
            newarr.push(...blog.tags);
        });

        const tagsSet = new Set(newarr);
        setTags(Array.from(tagsSet));
    }, []);

    const toggleSelected = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags((prev) => [...prev, tag]);
            return;
        }
        setSelectedTags((prev) => prev.filter((val) => val !== tag));
    };

    useEffect(() => {
        const { create } = UrlQueryGenerator({ url, query: "tags" });

        // some weird logic
        if (selectedTags.length < 1) {
            if (!url.includes("tags")) return;
            const newQuery = create(selectedTags);
            return setUrl(appConfig.apiUrl + "/blogs?" + newQuery);
        }

        // Create new query string
        const newQuery = create(selectedTags);

        // Append new query string to api url
        setUrl(`${appConfig.apiUrl}/blogs?${newQuery}`);
    }, [selectedTags]);

    return (
        <Flex gap="3" wrap="wrap" w="full" my="5">
            {tags.map((tag) => {
                return (
                    <Tag
                        onClick={(e) => {
                            toggleSelected(e.target.innerText);
                        }}
                        key={Math.random()}
                        _hover={{
                            color: "red.200",
                            cursor: "pointer",
                            bg: "rgba(254, 178, 178, 0.16)"
                        }}
                        variant="outline"
                        fontWeight="600"
                        color={selectedTags.includes(tag) ? "red.200" : "gray.400"}
                        bg={
                            selectedTags.includes(tag) ? "rgba(254, 178, 178, 0.16)" : "transparent"
                        }
                        size={{ base: "md", lg: "lg" }}>
                        {tag}
                    </Tag>
                );
            })}
        </Flex>
    );
}
