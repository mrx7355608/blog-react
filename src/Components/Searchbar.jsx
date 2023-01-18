import React, { useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import appConfig from "../../config/appConfig";
import useSearch from "../Hooks/useSearch";
import { UrlQueryGenerator } from "../UrlGenerator";

export default function Searchbar({ url, setUrl }) {
    const { searchTerm, setDebounce } = useSearch();

    const validateString = (str) => {
        // Detect if string contains any special characters
        const res = str.trim().replace(/[^\w\s-]/gi, "");
        return res;
    };

    // Hit api
    useEffect(() => {
        const { create } = UrlQueryGenerator({ url, query: "title" });

        // TODO: show error if string contains special characters
        // If string is invalid then, do not hit api for a search
        const searchVal = validateString(searchTerm);
        if (!searchVal) {
            if (!url.includes("title")) return;
            const newQuery = create("");
            return setUrl(appConfig.apiUrl + "/blogs?" + newQuery);
        }

        // Create a new query
        const newQuery = create(searchVal);

        // Append new query string to api url
        const newUrl = appConfig.apiUrl + "/blogs?" + newQuery;
        setUrl(newUrl);
    }, [searchTerm]);

    return (
        <Box pos="relative">
            <Input
                onChange={(e) => setDebounce(e.target.value)}
                _placeholder={{
                    opacity: 1,
                    color: "whiteAlpha.600"
                }}
                placeholder="Search"
                fontWeight="600"
                px="4"
                pr="7"
                size="lg"
                variant="solid"
                borderColor="whiteAlpha.600"
                color="whiteAlpha.800"
                bg="gray.700"
            />
            <FaSearch
                size="14px"
                style={{
                    position: "absolute",
                    right: "3%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "rgba(255,255,255,0.7)"
                }}
            />
        </Box>
    );
}
