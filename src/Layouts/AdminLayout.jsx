import { Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AdminPageSidebar from "../Components/AdminPageSidebar";
import UserContext from "../Contexts/UserContext";
import useAdminFetch from "../Hooks/useAdminFetch";
import appConfig from "../../config/appConfig";

export default function AdminLayout() {
    // Checks if the user is authenticated and is Admin
    const { loading, data: user, error } = useAdminFetch(`${appConfig.adminUrl}/`);

    if (loading) return <Spinner />;
    if (error) {
        return (
            <Flex minW="700px" mx="auto" justify="center" align="center" minH="100vh">
                <Heading>{error.message}</Heading>
                <Link to="login">
                    <Button variant="solid" colorScheme={"red"}>
                        Login
                    </Button>
                </Link>
            </Flex>
        );
    }

    return (
        <UserContext.Provider value={user}>
            <Navbar />
            <Flex>
                <AdminPageSidebar />
                <Outlet />
            </Flex>
        </UserContext.Provider>
    );
}
