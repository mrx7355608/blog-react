import { Box, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function DesktopSearchbar() {
    return (
        <Box pos="relative">
            <Input
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
