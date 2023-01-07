import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import appConfig from "../../config/appConfig";
import useSearch from "../Hooks/useSearch";

export default function DesktopSearchbar() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const { searchTerm, setDebounce } = useSearch();

    // Hit api
    useEffect(() => {
        const searchVal = searchTerm.trim().replace(/[^\w\s]/gi, "");
        if (!searchVal) return;
        setLoading(true);
        const url = `${appConfig.apiUrl}/blogs?title=${searchVal}`;
        fetch(url, {
            mode: "cors"
        })
            .then((resp) => resp.json())
            .then((r) => {
                setLoading(false);
                console.log(r);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    }, [searchTerm]);

    return (
        <Box pos="relative">
            <Input
                onChange={(e) => setDebounce(e.target.value)}
                _placeholder={{
                    opacity: 1,
                    color: "gray.800"
                }}
                placeholder="Search"
                fontWeight="600"
                px="4"
                pr="7"
                size="lg"
                variant="outline"
                borderColor="gray.600"
                color="gray.800"
            />
            <FaSearch
                size="14px"
                style={{
                    position: "absolute",
                    right: "3%",
                    top: "50%",
                    transform: "translateY(-50%)"
                }}
            />
        </Box>
    );
}
