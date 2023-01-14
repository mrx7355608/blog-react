import { Button, Heading, Input, Spinner, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import appConfig from "../../config/appConfig";
import { useParams } from "react-router-dom";

export default function AdminEditBlog() {
    const { id } = useParams();
    const editorRef = useRef(null);
    const toast = useToast({
        variant: "left-accent",
        isClosable: true,
        duration: 5000,
        position: "top-right"
    });
    const [data, setData] = useState({
        title: "",
        body: "",
        tags: []
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch blog content
    useEffect(() => {
        const url = `${appConfig.adminUrl}/blogs/${id}`;
        const options = {
            method: "GET",
            mode: "cors",
            credentials: "include"
        };

        (async function () {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setLoading(false);
                delete result._id;
                delete result.__v;
                delete result.createdAt;
                delete result.updatedAt;
                delete result.published;
                if (!response.ok) return setError({ message: result.error });
                setData(result);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        })();
    }, []);

    if (loading) return <Spinner />;
    if (error) return <Heading>{error.message}</Heading>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") setData({ ...data, title: value });
        if (name === "tags") setData({ ...data, tags: value.split(",") });
    };

    const showToast = (message, type) => {
        return toast({
            title: message,
            status: type
        });
    };

    const editBlog = async () => {
        data.body = editorRef.current.getContent();
        console.log(data);
        const url = `${appConfig.adminUrl}/blogs/update/${id}`;
        const options = {
            method: "PATCH",
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) return showToast(result.error, "error");
            return showToast(result.message, "success");
        } catch (err) {
            setLoading(false);
            setError(err);
        }
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
                    value={data.title}
                />
                <Editor
                    textareaName="body"
                    apiKey={appConfig.editorApiKey}
                    initialValue={data.body}
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
                    value={data.tags.join(",")}
                />
                {loading ? (
                    <Button disabled w="full" my="5" colorScheme="red" type="submit">
                        Edit
                    </Button>
                ) : (
                    <Button w="full" my="5" colorScheme="red" type="submit">
                        Edit
                    </Button>
                )}
            </form>
        </>
    );
}
