import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";

export const AdminLayout = () => {
    return (
        <div className="flex items-start justify-center w-full">
            <AdminSidebar />
            <div className="w-3/4 p-4">
                <Outlet />
            </div>
        </div>
    );
};
