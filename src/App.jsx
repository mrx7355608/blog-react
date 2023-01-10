import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout
import MainLayout from "./Layouts/MainLayout";
import AdminLayout from "./Layouts/AdminLayout";
// Pages
import Home from "./Pages/Home";
import UsersAdminPage from "./Pages/UsersAdminPage";
import BlogsAdminPage from "./Pages/BlogsAdminPage";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import AdminLogin from "./Pages/AdminLogin";
import Admin from "./Pages/Admin";
import AdminCreateBlog from "./Pages/AdminCreateBlog";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<Admin />} />
                    <Route path="users" element={<UsersAdminPage />} />
                    <Route path="blogs">
                        <Route index element={<BlogsAdminPage />} />
                        <Route path="create" element={<AdminCreateBlog />} />
                    </Route>
                </Route>
                <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter>
    );
}
