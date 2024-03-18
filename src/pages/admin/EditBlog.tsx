import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuthFetch from "../../hooks/useAuthFetch";
import { IBlog } from "../../types/blog";
import { Spinner } from "../../components/main/Spinner";
import ErrorBox from "../../components/blog/ErrorBox";

export default function EditBlog() {
    // Get blog id from params
    const { id } = useParams();

    // fetch blog from server
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/id/${id}`;
    const { loading, error, response } = useAuthFetch<IBlog>(url);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorBox error={error} />;
    }

    return (
        <div className="py-8">
            {successMessage.length > 0 && (
                <SuccessAlert message={successMessage} />
            )}
            <h1 className="font-bold text-4xl mb-5">Edit Blog</h1>

            {/* Blog title input */}
            <input
                onChange={handleChange}
                className="input input-bordered input-lg mb-3 w-full"
                name="title"
                type="text"
                placeholder="Title"
            />

            {/* Blog content */}
            <Editor
                ref={editorRef}
                apiKey={import.meta.env.VITE_TINYMCE_APIKEY}
                init={{
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    content_css: "/tinymce_darktheme.css",
                }}
                initialValue="Write your blog here"
            />
            {/* Blog tags input box */}
            <p className="mt-8 mb-2 text-lg mt-8">Tags</p>
            <input
                className="input input-bordered w-full"
                name="tags"
                onChange={handleChange}
                placeholder="Add tags (separated by comma)"
            />

            {/* Blog summary input box */}
            <p className="mt-8 mb-2 text-lg mt-8">Summary</p>
            <textarea
                className="input input-bordered w-full"
                name="summary"
                onChange={handleChange}
                placeholder="Write brief and concise blog summary"
            ></textarea>

            {/* Select publishing status */}
            <p className="mt-8 mb-2 text-lg">Select publishing status</p>
            <select
                className="select select-bordered w-full max-w-xs"
                name="is_published"
                onChange={handleChange}
            >
                <option value="published" selected>
                    Published
                </option>
                <option value="draft">Draft</option>
            </select>

            {error ? (
                <p className="bg-red-200 text-red-700 text-lg font-medium p-3 w-full mt-3 rounded-md">
                    {error}
                </p>
            ) : null}

            {/* Create blog button */}
            <button onClick={createBlog} className="mt-8 btn btn-info w-full">
                {loading ? <Spinner /> : "Create blog"}
            </button>
        </div>
    );

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }
}
