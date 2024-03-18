import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/main/Spinner";
import InternalServerError from "../components/main/InternalServerError";
import ToastProvider from "../context/toast";

export const AdminLayout = () => {
    const navTo = useNavigate();
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line
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
            <ToastProvider>
                <AdminSidebar />
                <div className="w-3/4 p-4">
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </div>
            </ToastProvider>
        </div>
    );
};
