import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Layouts
import { AdminLayout } from "./layouts/AdminLayout";
import InternalServerError from "./components/main/InternalServerError";

// Pages
const CreateBlog = lazy(() => import("./pages/CreateBlog"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DraftBlogs = lazy(() => import("./pages/DraftBlogs"));
const Login = lazy(() => import("./pages/Login"));
const PublishedBlogs = lazy(() => import("./pages/PublishedBlogs"));
const EditBlog = lazy(() => import("./pages/EditBlog"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        errorElement: <InternalServerError />,
        children: [
            {
                index: true,
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
        path: "login",
        element: <Login />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
