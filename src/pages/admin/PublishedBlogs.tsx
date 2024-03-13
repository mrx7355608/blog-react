import { BlogCard } from "../../components/BlogCard";
import InfiniteScroll from "../../components/InfiniteScroll";

export const PublishedBlogs = () => {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <InfiniteScroll endpoint="/api/blogs/published" Card={BlogCard} />
        </div>
    );
};
