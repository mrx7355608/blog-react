import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function MainLayout() {
    return (
        <Box minH="100vh" minW="100vw">
            <Navbar />
            <React.Suspense fallback={<Spinner />}>
                <Outlet />
            </React.Suspense>
        </Box>
    );
}
