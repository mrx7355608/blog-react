import Spinner from "../../components/main/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "../../components/blog/InfiniteScroll";
import AdminBlogCard from "../../components/admin/AdminBlogCard";
import { logoutAdmin } from "../../services/admin.services";

export default function Dashboard() {
    const [logoutLoading, setLogoutLoading] = useState(false);
    const navTo = useNavigate();

    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <div className="flex justify-between items-center w-full mb-8">
                <h1 className="text-4xl font-bold inline text-white">Blogs</h1>
                <button onClick={logout} className="btn btn-error">
                    {logoutLoading ? <Spinner /> : "Logout"}
                </button>
            </div>
            <InfiniteScroll endpoint="/api/blogs" Card={AdminBlogCard} />
        </div>
    );

    async function logout() {
        setLogoutLoading(true);

        try {
            const result = await logoutAdmin();
            if (result.error) {
                return alert(result.error);
            }
            navTo("/admin/login");
        } catch (err) {
            alert((err as Error).message);
        } finally {
            setLogoutLoading(false);
        }
    }
}
