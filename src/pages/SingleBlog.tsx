import { useParams } from "react-router-dom";
import useAuthFetch from "../hooks/useAuthFetch";
import { IBlog } from "../types/blog";
import { Spinner } from "../components/Spinner";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";

export const SingleBlog = () => {
    const { slug } = useParams();
    const { loading, error, response } = useAuthFetch<IBlog>(
        `${import.meta.env.VITE_SERVER_URL}/api/blogs/${slug}`,
    );

    return (
        <div className="bg-black min-h-screen w-full py-12">
            {loading && <Spinner />}
            {error && <p className="text-red-700 font-bold text-lg">{error}</p>}
            {response ? <Blog blog={response.data} /> : null}
        </div>
    );
};

function Blog({ blog }: { blog: IBlog }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="w-full px-11 lg:px-0 lg:w-2/3 mx-auto">
            <h1 className="text-4xl font-black">{blog.title}</h1>
            <i className="text-gray-400 text-lg my-4">{blog.published_on}</i>
            <div className="flex flex-wrap gap-2 mt-1 mb-8">
                {blog.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
            <div className="no-tw-base">{ReactHtmlParser(blog.content)}</div>
        </div>
    );
}

function Tag({ tag }: { tag: string }) {
    return (
        <span className="font-bold text-md bg-transparent border-2 border-cyan-400 px-5 rounded-full py-1 text-cyan-400">
            {tag}
        </span>
    );
}
