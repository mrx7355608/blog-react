import AdminBlogCard from "../components/admin/AdminBlogCard";
import InfiniteScroll from "../components/blog/InfiniteScroll";

export default function PublishedBlogs() {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <InfiniteScroll
                endpoint="/api/blogs/published"
                Card={AdminBlogCard}
            />
        </div>
    );
}
