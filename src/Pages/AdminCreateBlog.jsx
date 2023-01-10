import { useToast, Button, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import appConfig from "../../config/appConfig";
import { useNavigate } from "react-router-dom";

export default function AdminCreateBlog() {
    const [loading, setLoading] = useState(false);
    const editorRef = useRef(null);
    const navigateTo = useNavigate();
    const toast = useToast({
        position: "top-right",
        isClosable: true,
        duration: 5000,
        variant: "left-accent"
    });
    const [blogData, setBlogData] = useState({
        title: "",
        body: "",
        tags: [],
        published: false
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === "tags") {
            return setBlogData({ ...blogData, tags: value.split(",") });
        }
        return setBlogData({ ...blogData, title: value });
    };

    const showToast = (message) => {
        return toast({
            title: message,
            status: "error"
        });
    };

    const createBlog = async () => {
        blogData.body = editorRef.current.getContent();
        const url = `${appConfig.adminUrl}/blogs`;
        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blogData),
            credentials: "include"
        };

        try {
            setLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            setLoading(false);
            if (!response.ok) return showToast(result.error);
            return navigateTo("/admin/blogs");
        } catch (err) {
            showToast(err.message);
        }
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createBlog();
                }}>
                <Heading mb="5">Create Blog</Heading>
                <Input
                    name="title"
                    onChange={(e) => handleOnChange(e)}
                    mb="3"
                    placeholder="Title"
                />
                <Editor
                    textareaName="body"
                    apiKey={appConfig.editorApiKey}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount"
                        ],
                        toolbar:
                            "blocks fontfamily fontsize | underline strikethrough | link image media | align lineheight | emoticons charmap | " +
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist | " +
                            "removeformat | help",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                />

                <Input name="tags" onChange={(e) => handleOnChange(e)} placeholder="Tags" />
                {loading ? (
                    <Button disabled w="full" my="5" colorScheme="red" type="submit">
                        Create
                    </Button>
                ) : (
                    <Button w="full" my="5" colorScheme="red" type="submit">
                        Create
                    </Button>
                )}
            </form>
        </>
    );
}
