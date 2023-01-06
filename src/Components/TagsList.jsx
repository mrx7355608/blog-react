import React from "react";
import { Flex, Tag } from "@chakra-ui/react";

export default function TagsList({ setUrl }) {
    const tags = ["discussion", "git", "linux", "expressjs", "docker"];
    return (
        <Flex gap="3" wrap="wrap" w="full" my="5">
            {tags.map((tag) => {
                return (
                    <Tag
                        onClick={(e) => {
                            setUrl((prev) => {
                                let queryParam = "?tags=";
                                if (prev.includes("?")) queryParam = "&tags=";
                                if (prev.includes("tags")) queryParam = ",";
                                const newUrl = prev + queryParam + e.target.innerText;
                                console.log({ newUrl });
                                return newUrl;
                            });
                        }}
                        _hover={{
                            color: "red.600",
                            cursor: "pointer",
                            borderColor: "red.600"
                        }}
                        variant="outline"
                        color="gray.700"
                        size={{ base: "md", lg: "lg" }}
                        key={Math.random()}>
                        {tag}
                    </Tag>
                );
            })}
        </Flex>
    );
}
