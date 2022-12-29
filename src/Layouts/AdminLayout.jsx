import { Heading, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar"
import AdminPageSidebar from "../Components/AdminPageSidebar"

export default function AdminLayout() {
	return (
		<>
			<Navbar />
			<Flex>
				<AdminPageSidebar />
				<Outlet />
			</Flex>
		</>
	)
}