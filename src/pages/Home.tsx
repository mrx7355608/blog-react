import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";
import { IBlog } from "../types/blog";
import useAuthFetch from "../hooks/useAuthFetch";
import Searchbar from "../components/Searchbar";

export const Home = () => {
    const { loading, error, response } = useAuthFetch<IBlog[]>(
        `${import.meta.env.VITE_SERVER_URL}/api/blogs/published?page=1`
    );
    return (
        <div className="bg-black min-h-screen flex items-start justify-center py-12 px-12 w-full">
            <div className="flex items-center justify-start flex-col max-w-4xl">
                {loading && <Spinner />}
                {error && (
                    <p className="text-red-700 font-bold text-lg">{error}</p>
                )}
                {response &&
                    response.data.map((blog: IBlog) => {
                        return <BlogCard blog={blog} />;
                    })}
            </div>
        </div>
    );
};
