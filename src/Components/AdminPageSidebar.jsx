import { VStack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AdminPageSidebar() {
    return (
        <VStack gap="2" p="4" bg="transparent" h="100vh" w="25vw">
            <Link style={{ width: "100%" }} to="">
                <Box w="full" p="3" rounded="md" bg="gray.700">
                    <Text fontWeight="600">Dashboard</Text>
                </Box>
            </Link>
            <Link style={{ width: "100%" }} to="users">
                <Box w="full" p="3" rounded="md" bg="gray.700">
                    <Text fontWeight="600">Users</Text>
                </Box>
            </Link>
            <Link style={{ width: "100%" }} to="blogs">
                <Box w="full" p="3" rounded="md" bg="gray.700">
                    <Text fontWeight="600">Blogs</Text>
                </Box>
            </Link>
        </VStack>
    );
}
