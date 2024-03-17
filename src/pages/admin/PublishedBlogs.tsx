import { BlogCard } from "../../components/blog/BlogCard";
import InfiniteScroll from "../../components/blog/InfiniteScroll";

export const PublishedBlogs = () => {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <InfiniteScroll endpoint="/api/blogs/published" Card={BlogCard} />
        </div>
    );
};
