import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout
import MainLayout from "./Layouts/MainLayout";
import AdminLayout from "./Layouts/AdminLayout";
// Pages
import Home from "./Pages/Home";
import UsersAdminPage from "./Pages/UsersAdminPage";
import BlogsAdminPage from "./Pages/BlogsAdminPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<h1>Admin</h1>} />
                    <Route path="users" element={<UsersAdminPage />} />
                    <Route path="blogs" element={<BlogsAdminPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
