import { Spinner } from "../../components/Spinner";
import useAuthFetch from "../../hooks/useAuthFetch";
import { BlogCard } from "../../components/BlogCard";
import { IBlog } from "../../types/blog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navTo = useNavigate();
    const { loading, error, response } = useAuthFetch<IBlog[]>(
        `${import.meta.env.VITE_SERVER_URL}/api/blogs`,
    );

    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <div className="flex justify-between items-center w-full mb-8">
                <h1 className="text-4xl font-bold inline">Blogs</h1>
                <button onClick={logout} className="btn btn-error text-white">
                    {logoutLoading ? <Spinner /> : "Logout"}
                </button>
            </div>
            {loading && <Spinner />}
            {error && <p className="text-red-700 font-bold text-lg">{error}</p>}
            {response &&
                response.data.map((blog: IBlog) => {
                    return <BlogCard blog={blog} />;
                })}
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
