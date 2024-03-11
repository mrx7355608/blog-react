import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";
import { IBlog } from "../types/blog";
import useAuthFetch from "../hooks/useAuthFetch";
import Searchbar from "../components/Searchbar";

export const Home = () => {
    const { loading, error, response } = useAuthFetch<IBlog[]>(
        "http://localhost:8000/api/blogs/published?page=2"
    );
    return (
        <div className="flex items-start gap-2 py-12 px-8">
            <div className="flex items-center justify-start flex-col w-3/4">
                {loading && <Spinner />}
                {error && (
                    <p className="text-red-700 font-bold text-lg">{error}</p>
                )}
                {response &&
                    response.data.map((blog: IBlog) => {
                        return <BlogCard blog={blog} />;
                    })}
            </div>
            <div className="w-1/4 flex items-center justify-start flex-col">
                <Searchbar />
                <div>{/* TODO: Display a list of random articles */}</div>
            </div>
        </div>
    );
};
