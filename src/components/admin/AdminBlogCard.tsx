import { Link, useNavigate } from "react-router-dom";
import { IBlog } from "../../types/blog";
import { useToast } from "../../context/toast";
import { useState } from "react";
import {
    deleteBlog,
    publishBlog,
    unPublishBlog,
} from "../../services/blog.services";
import DeleteBlogBtn from "./DeleteBlogBtn";
import PublishButton from "./PublishButton";
import UnpublishButton from "./UnpublishButton";
import TagsList from "./TagsList";

type ServiceFunc = (blogID: string) => Promise<string | null>;

export default function AdminBlogCard({ blog }: { blog: IBlog }) {
    const navTo = useNavigate();
    const { showErrorToast, showSuccessToast } = useToast();
    const [loading, setLoading] = useState({
        isDeleting: false,
        isPublishing: false,
        isUnpublishing: false,
    });

    const publish = wrapper(
        publishBlog,
        "isPublishing",
        "Published successfully"
    );
    const unPublish = wrapper(
        unPublishBlog,
        "isUnpublishing",
        "Un-published successfully"
    );
    const removeBlog = wrapper(
        deleteBlog,
        "isDeleting",
        "Deleted successfully"
    );

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

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 items-center w-full p-3">
                <PublishButton
                    publish={publish}
                    isLoading={loading.isPublishing}
                />
                <UnpublishButton
                    unPublish={unPublish}
                    isLoading={loading.isUnpublishing}
                />
                <button
                    className="btn btn-ghost bg-zinc-900 flex-1"
                    onClick={() => navTo(`/admin/edit/${blog._id}`)}
                >
                    Edit
                </button>
                <DeleteBlogBtn
                    removeBlog={removeBlog}
                    isLoading={loading.isDeleting}
                />
            </div>
            <hr className="border-gray-800" />
        </div>
    );

    /* 
        A wrapper that returns a function which calls 
        the service in a try / catch block and show 
        success & error toasts based on how the operation went
        and also toggles loading states
    */
    function wrapper(
        serviceFunc: ServiceFunc,
        loadingStateField: string,
        successMessage: string
    ) {
        return async function () {
            try {
                setLoading((prev) => ({ ...prev, [loadingStateField]: true }));
                // Call service func that returns null on success
                // and an error message on failure
                const error = await serviceFunc(blog._id);
                if (error) {
                    throw new Error(error);
                }

                // Show a success response
                showSuccessToast(successMessage);
            } catch (err: unknown) {
                showErrorToast((err as Error).message);
            } finally {
                setLoading((prev) => ({ ...prev, [loadingStateField]: false }));
            }
        };
    }
}
