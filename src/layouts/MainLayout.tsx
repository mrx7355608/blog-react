import { Outlet } from "react-router-dom";
import Navbar from "../components/main/Navbar";

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
