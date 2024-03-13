import useAuthFetch from "../../hooks/useAuthFetch";
import { IBlog } from "../../types/blog";
import { Spinner } from "../../components/Spinner";
import { BlogCard } from "../../components/BlogCard";

export const DraftBlogs = () => {
    const { loading, error, response } = useAuthFetch<IBlog[]>(
        `${import.meta.env.VITE_SERVER_URL}/api/blogs/un-published`,
    );

    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            {loading && <Spinner />}
            {error && <p className="text-red-700 font-bold text-lg">{error}</p>}
            {response &&
                response.data.map((blog: IBlog) => {
                    return <BlogCard blog={blog} />;
                })}
        </div>
    );
};
