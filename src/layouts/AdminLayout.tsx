/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { MainPagesSpinner } from "../components/main/MainPagesSpinner";
import InternalServerError from "../components/main/InternalServerError";
import ToastProvider from "../context/toast";
import { getAdmin } from "../services/admin.services";

export const AdminLayout = () => {
    const navigation = useNavigation();

    return (
        <div className="flex items-start justify-center w-full">
            {navigation.state === "loading" && <MainPagesSpinner />}
            <ToastProvider>
                <AdminSidebar />
                <div className="w-3/4 p-4">
                    <Suspense fallback={<MainPagesSpinner />}>
                        <Outlet />
                    </Suspense>
                </div>
            </ToastProvider>
        </div>
    );
};
