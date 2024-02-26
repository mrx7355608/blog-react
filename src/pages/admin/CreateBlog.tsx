import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { Spinner } from "../../components/Spinner";
import { SuccessAlert } from "../../components/SuccessAlert";

interface IBlogInputData {
    title: string;
    content: string;
    tags: string;
    summary: string;
    is_published: string;
}
interface IBlogData {
    title: string;
    content: string;
    tags: string[];
    is_published: boolean;
}

export const CreateBlog = () => {
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
            {successMessage.length > 0 && (
                <SuccessAlert message={successMessage} />
            )}
            <h1 className="font-bold text-4xl mb-5">Create Blog</h1>

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
        >,
    ) {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    }

    function createBlogDataObject() {
        setLoading(true);
        const blogContent = editorRef.current?.editor?.getContent() || "";

        const data: IBlogData = {
            ...blogData,
            content: blogContent,
            is_published: blogData.is_published === "draft" ? false : true,
            tags: blogData.tags.split(","),
        };
        return data;
    }

    async function createBlog() {
        const data = createBlogDataObject();

        // Make api call to create blog
        fetch("http://localhost:8000/api/blogs", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setSuccessMessage("Blog has been published!");
                }
            })
            .catch(() => setError("Something went wrong!"))
            .finally(() => setLoading(false));
    }
};
