import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import InternalServerError from "../components/InternalServerError";

export const AdminLayout = () => {
    const navTo = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showInternalError, setShowInternalError] = useState(false);

    useEffect(() => {
        // Check if admin is logged in by making request
        // to <server-url>/api/user to fetch data
        // If response is ok, continue else return user to blog home page
        fetch("http://localhost:8000/api/user", {
            method: "GET",
            credentials: "include",
        })
            .then((resp) => {
                if (!resp.ok) {
                    navTo("/");
                }
            })
            .catch(() => setShowInternalError(true))
            .finally(() => setLoading(false));
    }, [navTo]);

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (showInternalError) {
        return <InternalServerError />;
    }

    return (
        <div className="flex items-start justify-center w-full">
            <AdminSidebar />
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
};
