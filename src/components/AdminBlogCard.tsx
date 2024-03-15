import { Link } from "react-router-dom";
import { IBlog } from "../types/blog";
import Tag from "./Tag";
import { IApiResponse } from "../types/api";

export default function AdminBlogCard({ blog }: { blog: IBlog }) {
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
                    Publish
                </button>
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={unpublishBlog}
                >
                    Un-publish
                </button>
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={editBlog}
                >
                    Edit
                </button>
                <button className="btn btn-error flex-1" onClick={deleteBlog}>
                    Delete
                </button>
            </div>
            <hr className="border-gray-800" />
        </div>
    );

    function publishBlog() {}
    function unpublishBlog() {
        const serverUrl = `${
            import.meta.env.VITE_SERVER_URL
        }/api/blogs/un-publish/${blog._id}`;
        fetch(serverUrl)
            .then((resp) => resp.json())
            .then((apiResponse: IApiResponse<string>) => {
                if (apiResponse.error) {
                    showErrorToast(apiResponse.error);
                } else {
                    showSuccessToast("Blog un-published successfully");
                }
            })
            .catch((err) => showErrorToast(err.message))
            .finally(() => setUnPublishLoading(false));
    }

    function editBlog() {}
    function deleteBlog() {}
}
