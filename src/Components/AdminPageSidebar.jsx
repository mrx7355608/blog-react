import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function AdminPageSidebar() {
	return (
		<Box bg="gray.200" h="100vh" w="25vw" >
			<Flex>
				<Link to="users">Users</Link>
			</Flex>
			<Flex>
				<Link to="blogs">Blogs</Link>
			</Flex>
		</Box>
	)
}