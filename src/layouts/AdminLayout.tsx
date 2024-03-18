/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/main/Spinner";
import InternalServerError from "../components/main/InternalServerError";
import ToastProvider from "../context/toast";
import { getAdmin } from "../services/admin.services";

export const AdminLayout = () => {
    const navTo = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showInternalError, setShowInternalError] = useState(false);

    useEffect(() => {
        const isAdminLoggedIn = async () => {
            // getAdmin() will return admin data if he is logged in (result.ok == true)
            // otherwise result.ok will be false
            const result = await getAdmin();

            setLoading(false);
            if (!result.ok) {
                return navTo("/");
            }
        };

        isAdminLoggedIn();
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
