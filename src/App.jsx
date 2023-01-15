import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout
import MainLayout from "./Layouts/MainLayout";
const AdminLayout = React.lazy(() => import("./Layouts/AdminLayout"));
// Pages
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
const UsersAdminPage = React.lazy(() => import("./Pages/UsersAdminPage"));
const BlogsAdminPage = React.lazy(() => import("./Pages/BlogsAdminPage"));
const Blog = React.lazy(() => import("./Pages/Blog"));
const About = React.lazy(() => import("./Pages/About"));
const AdminLogin = React.lazy(() => import("./Pages/AdminLogin"));
const Admin = React.lazy(() => import("./Pages/Admin"));
const AdminCreateBlog = React.lazy(() => import("./Pages/AdminCreateBlog"));
const AdminEditBlog = React.lazy(() => import("./Pages/AdminEditBlog"));
// config
import appConfig from "../config/appConfig";
import { Spinner } from "@chakra-ui/react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path={appConfig.clientAdminUrl} element={<AdminLayout />}>
                    <Route index element={<Admin />} />
                    <Route path="users" element={<UsersAdminPage />} />
                    <Route path="blogs">
                        <Route index element={<BlogsAdminPage />} />
                        <Route path="create" element={<AdminCreateBlog />} />
                        <Route path="edit/:id" element={<AdminEditBlog />} />
                    </Route>
                </Route>
                <Route
                    path={`/${appConfig.clientAdminUrl}/login`}
                    element={
                        <React.Suspense fallback={<Spinner />}>
                            <AdminLogin />
                        </React.Suspense>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
