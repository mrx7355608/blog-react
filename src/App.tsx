import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Layouts
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";

// Pages
const Home = lazy(() => import("./pages/blogs/Home"));
const SingleBlog = lazy(() => import("./pages/blogs/SingleBlog"));
const CreateBlog = lazy(() => import("./pages/admin/CreateBlog"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const DraftBlogs = lazy(() => import("./pages/admin/DraftBlogs"));
const Login = lazy(() => import("./pages/admin/Login"));
const PublishedBlogs = lazy(() => import("./pages/admin/PublishedBlogs"));
const EditBlog = lazy(() => import("./pages/admin/EditBlog"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":slug",
                element: <SingleBlog />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "published",
                element: <PublishedBlogs />,
            },
            {
                path: "drafts",
                element: <DraftBlogs />,
            },
            {
                path: "create-blog",
                element: <CreateBlog />,
            },
            {
                path: "edit/:id",
                element: <EditBlog />,
            },
        ],
    },
    {
        path: "/admin/login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
