import { Button, Input, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function MobileSearchBar() {
    return (
        <Flex mt="2" gap="2">
            <Input
                placeholder="Search"
                fontWeight="600"
                px="3"
                pr="7"
                size="sm"
                rounded="md"
                variant="outline"
            />
            <Button variant="outline" size="sm" colorScheme={"red"}>
                <FaSearch />
            </Button>
        </Flex>
    );
}
