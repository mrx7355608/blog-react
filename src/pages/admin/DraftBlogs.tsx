import { BlogCard } from "../../components/blog/BlogCard";
import InfiniteScroll from "../../components/blog/InfiniteScroll";

export default function DraftBlogs() {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <InfiniteScroll
                endpoint="/api/blogs/un-published"
                Card={BlogCard}
            />
        </div>
    );
}
