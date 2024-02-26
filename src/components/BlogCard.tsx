import { IBlog } from "../types/blog";
import Tag from "./Tag";

export const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <div className="flex flex-col p-3">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-gray-600 mt-1">{blog.published_on}</p>

            <div className="flex flex-wrap gap-1 mt-1">
                {blog.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>

            <p className="leading-5 text-gray-700 mt-3 text-md mb-5">
                {blog.summary}
            </p>
            <hr />
        </div>
    );
};
