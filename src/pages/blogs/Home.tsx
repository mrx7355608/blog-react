import { BlogCard } from "../../components/blog/BlogCard";
import InfiniteScroll from "../../components/blog/InfiniteScroll";

export const Home = () => {
    return (
        <div className="bg-black min-h-screen flex items-start justify-center py-12 px-12 w-full">
            <div className="flex items-center justify-start flex-col max-w-4xl">
                <InfiniteScroll
                    endpoint={"/api/blogs/published"}
                    Card={BlogCard}
                />
            </div>
        </div>
    );
};
