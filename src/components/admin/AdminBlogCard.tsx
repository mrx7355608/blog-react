import { Link } from "react-router-dom";
import { IBlog } from "../../types/blog";
import Tag from "../blog/Tag";
import { IApiResponse } from "../../types/api";
import { useToast } from "../../context/toast";
import { useState } from "react";

export default function AdminBlogCard({ blog }: { blog: IBlog }) {
    const { showErrorToast, showSuccessToast } = useToast();
    const [isDoubleCheck, setDoubleCheck] = useState(false);
    const [loading, setLoading] = useState({
        isDeleting: false,
        isPublishing: false,
        isUnpublishing: false,
    });

    return (
        <div className="flex flex-col p-3 my-4 w-full">
            <Link to={`/${blog.slug}`}>
                <h1 className="text-3xl font-bold inline text-gray-100 hover:underline">
                    {blog.title}
                </h1>
            </Link>
            <i className="text-gray-500 font-medium mt-2">
                {blog.published_on}
            </i>

            <div className="flex flex-wrap gap-1 mt-2">
                {blog.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>

            <p className="text-gray-400 mt-4 mb-12 leading-6 font-normal">
                {blog.summary}
            </p>

            <div className="flex flex-wrap gap-2 items-center w-full p-3">
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={publishBlog}
                >
                    {loading.isPublishing ? <Spinner /> : "Publish"}
                </button>
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={unpublishBlog}
                >
                    {loading.isUnpublishing ? <Spinner /> : "Un-publish"}
                </button>
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={editBlog}
                >
                    Edit
                </button>
                {!isDoubleCheck ? (
                    <button
                        className="btn btn-error flex-1"
                        onClick={() => {
                            setDoubleCheck(true);
                            setTimeout(() => setDoubleCheck(false), 10000);
                        }}
                    >
                        Delete
                    </button>
                ) : (
                    <button
                        className="btn btn-error flex-1"
                        onClick={deleteBlog}
                    >
                        {loading.isDeleting ? (
                            <Spinner />
                        ) : (
                            "Click again to delete"
                        )}
                    </button>
                )}
            </div>
            <hr className="border-gray-800" />
        </div>
    );

    async function publishBlog() {
        setLoading((prev) => ({ ...prev, isPublishing: true }));
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const url = `${serverURL}/api/blogs/publish/${blog._id}`;
        const options: RequestInit = {
            method: "PATCH",
            credentials: "include",
        };

        try {
            const response = await fetch(url, options);
            const result: IApiResponse<IBlog> = await response.json();
            if (result.error) {
                throw new Error(result.error);
            }
            showSuccessToast("Blog published successfully");
        } catch (err: unknown) {
            showErrorToast((err as Error).message);
        } finally {
            setLoading((prev) => ({ ...prev, isPublishing: false }));
        }
    }

    async function unpublishBlog() {
        setLoading((prev) => ({ ...prev, isUnpublishing: true }));
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const url = `${serverURL}/api/blogs/un-publish/${blog._id}`;
        const options: RequestInit = {
            method: "PATCH",
            credentials: "include",
        };

        try {
            const response = await fetch(url, options);
            const result: IApiResponse<IBlog> = await response.json();
            if (result.error) {
                throw new Error(result.error);
            }
            showSuccessToast("Blog un-published successfully");
        } catch (err: unknown) {
            showErrorToast((err as Error).message);
        } finally {
            setLoading((prev) => ({ ...prev, isUnpublishing: false }));
        }
    }

    function editBlog() {}

    async function deleteBlog() {
        setLoading((prev) => ({ ...prev, isDeleting: true }));
        const serverURL = import.meta.env.VITE_SERVER_URL;
        const url = `${serverURL}/api/blogs/${blog._id}`;
        const options: RequestInit = {
            method: "DELETE",
            credentials: "include",
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                const result: IApiResponse<IBlog> = await response.json();
                if (result.error) {
                    throw new Error(result.error);
                }
            }
            showSuccessToast("Blog deleted successfully");
        } catch (err: unknown) {
            showErrorToast((err as Error).message);
        } finally {
            setLoading((prev) => ({ ...prev, isDeleting: false }));
        }
    }
}

function Spinner() {
    return <span className="loading loading-md"></span>;
}
