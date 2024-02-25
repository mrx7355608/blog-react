import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const CreateBlog = () => {
    const editorRef = useRef<Editor | null>(null);

    return (
        <div>
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
            <button
                onClick={getBlogContent}
                className="mt-4 btn btn-info w-full"
            >
                Create
            </button>
        </div>
    );

    function getBlogContent() {
        const content = editorRef.current?.editor?.getContent();
    }
};
