import { useParams } from "react-router-dom";
import useAuthFetch from "../hooks/useAuthFetch";
import { IBlog } from "../types/blog";
import { Spinner } from "../components/Spinner";
import Prism from "prismjs";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";

Prism.manual = true;

export const SingleBlog = () => {
    const { slug } = useParams();
    const { loading, error, response } = useAuthFetch<IBlog>(
        `http://localhost:8000/api/blogs/${slug}`
    );

    return (
        <div className="min-h-screen w-full py-12">
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
        <div className="w-2/3 mx-auto">
            <h1 className="text-4xl font-black">{blog.title}</h1>
            <p className="text-gray-600 text-lg my-2">{blog.published_on}</p>
            <div className="flex flex-wrap gap-1 mt-1 mb-8">
                {blog.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
            {ReactHtmlParser(blog.content)}
        </div>
    );
}

function Tag({ tag }: { tag: string }) {
    return (
        <span className="font-bold text-md bg-transparent border border-gray-400 px-3 py-1 rounded-lg text-gray-500">
            #{tag}
        </span>
    );
}
