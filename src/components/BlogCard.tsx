import { Link } from "react-router-dom";
import { IBlog } from "../types/blog";
import Tag from "./Tag";

export const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <div className="flex flex-col p-3 my-4">
            <Link to={`/${blog.slug}`}>
                <h1 className="text-3xl font-bold inline hover:underline hover:text-red-800">
                    {blog.title}
                </h1>
            </Link>
            <p className="text-gray-500 mt-1">{blog.published_on}</p>

            <div className="flex flex-wrap gap-1 mt-1">
                {blog.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>

            <p className="leading-5 text-gray-700 mt-4 text-md mb-12 leading-6">
                {blog.summary}
            </p>
            <hr />
        </div>
    );
};
