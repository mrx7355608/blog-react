import { BlogCard } from "../../components/BlogCard";
import InfiniteScroll from "../../components/InfiniteScroll";

export const DraftBlogs = () => {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <InfiniteScroll
                endpoint="/api/blogs/un-published"
                Card={BlogCard}
            />
        </div>
    );
};
