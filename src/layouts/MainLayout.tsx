import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import { Suspense } from "react";
import { MainPagesSpinner } from "../components/main/MainPagesSpinner";

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<MainPagesSpinner />}>
                <Outlet />
            </Suspense>
        </>
    );
};
