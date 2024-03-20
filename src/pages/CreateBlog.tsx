import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { MainPagesSpinner } from "../components/main/MainPagesSpinner";
import { SuccessAlert } from "../components/admin/SuccessAlert";
import { IBlogInputData } from "../types/blog";
import { createBlog, createBlogDataObject } from "../services/blog.services";

export default function CreateBlog() {
    const editorRef = useRef<Editor | null>(null);
    const [blogData, setBlogData] = useState<IBlogInputData>({
        title: "",
        tags: "",
        content: "",
        is_published: "published",
        summary: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    return (
        <div className="py-8">
            {/* Show a success alert message if blog is successfully created */}
            {successMessage.length > 0 && (
                <SuccessAlert message={successMessage} />
            )}

            {/* Page heading */}
            <h1 className="font-bold text-4xl mb-5">Create Blog</h1>

            {/* Title input */}
            <input
                onChange={handleChange}
                className="input input-bordered input-lg mb-3 w-full"
                name="title"
                type="text"
                placeholder="Title"
            />

            {/* Tinymce editor */}
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

            {/* Tags input */}
            <p className="mt-8 mb-2 text-lg mt-8">Tags</p>
            <input
                className="input input-bordered w-full"
                name="tags"
                onChange={handleChange}
                placeholder="Add tags (separated by comma)"
            />

            {/* Summary input */}
            <p className="mt-8 mb-2 text-lg mt-8">Summary</p>
            <textarea
                className="input input-bordered w-full"
                name="summary"
                onChange={handleChange}
                placeholder="Write brief and concise blog summary"
            ></textarea>

            {/* Publishing status */}
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
            <button onClick={create} className="mt-8 btn btn-info w-full">
                {loading ? <MainPagesSpinner /> : "Create blog"}
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

    async function create() {
        setLoading(true);
        try {
            const blogContent = editorRef.current?.editor?.getContent() || "";
            const data = createBlogDataObject(blogContent, blogData);
            const result = await createBlog(data);
            if (result.error) {
                return setError(result.error);
            }
            setSuccessMessage("Blog created");
        } catch (err) {
            return setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }
}
