import { Link, Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { IAdmin, useAdminContext } from "../contexts/admin";
import { Spinner } from "../components/Spinner";
import { useEffect } from "react";
import useAuthFetch from "../hooks/useAuthFetch";

export const AdminLayout = () => {
    const { setAdmin } = useAdminContext();
    const { loading, error, response } = useAuthFetch<IAdmin>(
        "http://localhost:8000/api/user",
    );

    useEffect(() => {
        if (response) {
            setAdmin(response.data);
        }
    }, [response]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center w-full">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col h-screen items-center justify-center w-full">
                <h1 className="text-4xl font-bold">{error}</h1>
                <Link to="/admin/login">
                    <button className="btn btn-info mx-auto w-full max-w-md mt-5">
                        Login to your account
                    </button>
                </Link>
            </div>
        );
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
