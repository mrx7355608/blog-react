import { Link } from "react-router-dom";
import { IBlog } from "../../types/blog";
import { FaArrowRight } from "react-icons/fa";
import TagsList from "./TagsList";

export const BlogCard = ({ blog }: { blog: IBlog }) => {
    return (
        <div className="flex flex-col p-3 my-4 w-full">
            {/* Title */}
            <Link to={`/${blog.slug}`}>
                <h1 className="text-3xl font-bold inline text-gray-100 hover:underline">
                    {blog.title}
                </h1>
            </Link>

            {/* Publishing date */}
            <i className="text-gray-500 font-medium mt-2">
                {blog.published_on}
            </i>

            {/* Tags */}
            <TagsList tags={blog.tags} />

            {/* Summary */}
            <p className="text-gray-400 mt-4 mb-12 leading-6 font-normal">
                {blog.summary}
            </p>

            {/* Read button */}
            <Link
                to={`/${blog.slug}`}
                className="btn bg-transparent text-yellow-500 border-0 outline-0 w-24 ml-auto mb-5 hover:bg-transparent"
            >
                READ <FaArrowRight color="inherit" />
            </Link>
            <hr className="border-gray-800" />
        </div>
    );
};
