import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Heading, Input, Spinner } from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";
// Hooks
import useShowToast from "../Hooks/useShowToast";
import useAdminFetch from "../Hooks/useAdminFetch";
// Others
import appConfig from "../../config/appConfig";
import BlogServices from "../Services/blog.services";

export default function AdminEditBlog() {
    // Fetch blog content
    const { loading, data: blog, error } = useAdminFetch(`${appConfig.adminUrl}/blogs/${id}`);
    const blogServices = new BlogServices();
    const { id } = useParams();
    const editorRef = useRef(null);
    const showToast = useShowToast();
    const [data, setData] = useState({
        title: "",
        body: "",
        tags: []
    });

    if (loading) return <Spinner />;
    if (error) return <Heading>{error.message}</Heading>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") setData({ ...data, title: value });
        if (name === "tags") setData({ ...data, tags: value.split(",") });
    };

    const editBlog = async () => {
        data.body = editorRef.current.getContent();
        const { response, result, error } = await blogServices.edit({ id, data });
        if (!response.ok) return showToast(result.error, "error");
        if (error) return showToast(error.message, "error");
        return showToast(result.message, "success");
    };

    return (
        <>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await editBlog();
                }}>
                <Heading mb="5">Edit Blog</Heading>
                <Input
                    onChange={handleChange}
                    name="title"
                    mb="3"
                    placeholder="Title"
                    value={blog.title}
                />
                <Editor
                    textareaName="body"
                    apiKey={appConfig.editorApiKey}
                    initialValue={blog.body}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "preview",
                            "help",
                            "wordcount"
                        ],
                        toolbar:
                            "undo redo | blocks | " +
                            "bold italic forecolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                />

                <Input
                    onChange={handleChange}
                    name="tags"
                    placeholder="Tags"
                    value={blog.tags.join(",")}
                />

                <Button w="full" my="5" colorScheme="red" type="submit">
                    Edit
                </Button>
            </form>
        </>
    );
}
