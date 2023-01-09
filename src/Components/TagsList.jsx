import React, { useEffect, useState } from "react";
import { Flex, Tag } from "@chakra-ui/react";
import { UrlQueryGenerator } from "../UrlGenerator";
import appConfig from "../../config/appConfig";

export default function TagsList({ setUrl, url }) {
    const tags = ["discussion", "git", "linux", "expressjs", "docker"];
    const [selectedTags, setSelectedTags] = useState([]);

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
                            color: "red.600",
                            cursor: "pointer",
                            borderColor: "red.600"
                        }}
                        variant="outline"
                        color={selectedTags.includes(tag) ? "red.500" : "gray.700"}
                        size={{ base: "md", lg: "lg" }}>
                        {tag}
                    </Tag>
                );
            })}
        </Flex>
    );
}
