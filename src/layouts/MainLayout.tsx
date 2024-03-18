import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import { Suspense } from "react";
import { Spinner } from "../components/main/Spinner";

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </>
    );
};
