import { Spinner } from "../../components/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "../../components/InfiniteScroll";
import AdminBlogCard from "../../components/AdminBlogCard";

export const Dashboard = () => {
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navTo = useNavigate();

    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <div className="flex justify-between items-center w-full mb-8">
                <h1 className="text-4xl font-bold inline text-white">Blogs</h1>
                <button onClick={logout} className="btn btn-error text-white">
                    {logoutLoading ? <Spinner /> : "Logout"}
                </button>
            </div>
            <InfiniteScroll endpoint="/api/blogs" Card={AdminBlogCard} />
        </div>
    );

    async function logout() {
        setLogoutLoading(true);
        fetch("http://localhost:8000/api/auth/logout", {
            method: "POST",
            credentials: "include",
        })
            .then((resp) => {
                if (resp.ok) {
                    navTo("/admin/login");
                }
            })
            .catch((err) => alert(err.message))
            .finally(() => setLogoutLoading(false));
    }
};
