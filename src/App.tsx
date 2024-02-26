import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Home } from "./pages/Home";
import { SingleBlog } from "./pages";
import {
    CreateBlog,
    Dashboard,
    DraftBlogs,
    PublishedBlogs,
    Login,
} from "./pages/admin";

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
