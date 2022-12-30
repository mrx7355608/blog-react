import { Button, Input, Box, position } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function MobileSearchBar() {
    return (
        <Box pos="relative">
            <Input
                placeholder="Search"
                fontWeight="600"
                px="3"
                pr="7"
                size="sm"
                rounded="full"
                bg="gray.100"
                border="0"
                outline="0"
            />
            <FaSearch
                style={{
                    position: "absolute",
                    top: "30%",
                    zIndex: "2",
                    right: "6%"
                }}
                color="rgb(108, 106, 106)"
                size="11px"
            />
        </Box>
    );
}
