import { Box, VStack, Flex, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
// import { FaDownArrow } from "react-icons/fa"

export default function AdminPageSidebar() {
	return (
		<VStack gap="2" p="4" bg="transparent" h="100vh" w="25vw" >
			<Link style={{width:"100%"}} to="users">
				<Flex 
					w="full"
					p="3"
					rounded="md"
					bg="gray.200"
					justify="space-between" 
					>
					<Text fontWeight="600" color="gray.700">
						Users
					</Text>
					>
				</Flex>
			</Link>
			<Link style={{width:"100%"}} to="blogs">
				<Flex 
					w="full"
					p="3"
					rounded="md"
					bg="gray.200"
					justify="space-between" 
					>
					<Text fontWeight="600" color="gray.700">
						Blogs
					</Text>
					>
				</Flex>
			</Link>
		</VStack>
	)
}