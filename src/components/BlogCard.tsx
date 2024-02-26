import { IBlog } from "../pages/admin/Dashboard";

export const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <div className="flex flex-col p-3">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-600">{blog.published_on}</p>
            <p className="text-gray-800">{blog.content}</p>
            <hr />
        </div>
    );
};
