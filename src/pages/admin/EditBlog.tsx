import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthFetch from "../../hooks/useAuthFetch";
import { IBlog, IBlogInputData } from "../../types/blog";
import { MainPagesSpinner } from "../../components/main/MainPagesSpinner";
import ErrorBox from "../../components/blog/ErrorBox";
import { Editor } from "@tinymce/tinymce-react";
import Spinner from "../../components/main/Spinner";
import { editBlog } from "../../services/blog.services";
import { useToast } from "../../context/toast";

export default function EditBlog() {
    const { showSuccessToast, showErrorToast } = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [blog, setBlog] = useState<IBlog>({
        title: "",
        content: "",
        summary: "",
        tags: [],
        _id: "",
        slug: "",
        published_on: "",
        is_published: true,
    });
    const editorRef = useRef<Editor | null>(null);
    // Get blog id from params
    const { id } = useParams();

    // fetch blog from server
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/id/${id}`;
    const { loading: fetching, error, response } = useAuthFetch<IBlog>(url);

    // Update the state if response is received from server
    useEffect(() => {
        if (response) {
            setBlog(response.data);
        }
    }, [response]);

    // Show loading spinner
    if (fetching) {
        return <MainPagesSpinner />;
    }

    // Show error
    if (error) {
        return <ErrorBox error={error} />;
    }

    return (
        <div className="py-8">
            {/* {successMessage.length > 0 && (
                <SuccessAlert message={successMessage} />
            )} */}
            <h1 className="font-bold text-4xl mb-5">Edit Blog</h1>

            {/* Blog title input */}
            <input
                onChange={handleChange}
                className="input input-bordered input-lg mb-3 w-full"
                name="title"
                type="text"
                placeholder="Title"
                value={blog.title}
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
                initialValue={blog.content}
            />
            {/* Blog tags input box */}
            <p className="mt-8 mb-2 text-lg mt-8">Tags</p>
            <input
                className="input input-bordered w-full"
                name="tags"
                onChange={handleChange}
                placeholder="Add tags (separated by comma)"
                value={blog.tags.join(",")}
            />

            {/* Blog summary input box */}
            <p className="mt-8 mb-2 text-lg mt-8">Summary</p>
            <textarea
                className="input input-bordered w-full"
                name="summary"
                onChange={handleChange}
                placeholder="Write brief and concise blog summary"
                value={blog.summary}
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
            <button onClick={update} className="mt-8 btn btn-info w-full">
                {loading ? <Spinner /> : "Update"}
            </button>
        </div>
    );

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) {
        const { name, value } = e.target;
        if (name === "tags") {
            return setBlog({ ...blog, tags: value.split(","), _id: blog._id });
        }
        setBlog({ ...blog, [name]: value, _id: blog._id });
    }

    async function update() {
        const updatedBlog: IBlogInputData = {};
        // Check which fields are updated
        const originalBlog = response?.data;
        if (originalBlog?.title !== blog.title) {
            updatedBlog.title = blog.title;
        }
        if (originalBlog?.content !== editorRef.current?.editor?.getContent()) {
            updatedBlog.content = blog.content;
        }
        if (originalBlog?.tags.join(",") !== blog.tags.join(",")) {
            (updatedBlog as any).tags = blog.tags;
        }
        if (originalBlog?.summary !== blog.summary) {
            updatedBlog.summary = blog.summary;
        }

        setLoading(true);
        try {
            const error = await editBlog(blog._id, updatedBlog);
            if (error) {
                return showErrorToast(error);
            }
            showSuccessToast("Edited successfully");
        } catch (err) {
            showErrorToast((err as Error).message);
        } finally {
            setLoading(false);
        }
    }
}
