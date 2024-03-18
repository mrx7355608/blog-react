import { IApiBlogData, IBlog, IBlogInputData } from "../types/blog";
import { IApiResponse } from "../types/api";

export function createBlogDataObject(
    blogContent: string,
    blogData: IBlogInputData
): IApiBlogData {
    const data = {
        ...blogData,
        content: blogContent,
        is_published: blogData.is_published === "draft" ? false : true,
        tags: blogData.tags.split(","),
    };
    return data;
}

export async function createBlog(
    blog: IApiBlogData
): Promise<IApiResponse<IBlog>> {
    // Setup url and options
    const url = `${import.meta.env.VITE_SERVER_URL}/api/blogs`;
    const options: RequestInit = {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(blog),
    };

    // Make api call to create blog
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export async function editBlog(
    blogID: string,
    data: IBlogInputData
): Promise<string | null> {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/${blogID}`;
    const options: RequestInit = {
        method: "PATCH",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const result: IApiResponse<IBlog> = await response.json();
    if (result.error) {
        return result.error;
    }

    return null;
}

export async function deleteBlog(blogID: string): Promise<string | null> {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/${blogID}`;
    const options: RequestInit = {
        method: "DELETE",
        credentials: "include",
    };
    const response = await fetch(url, options);

    // Indicates that status code is other than 204, maybe 404, 400
    const result: IApiResponse<string> | null = response.ok
        ? null
        : await response.json();
    if (result?.error) {
        return result.error;
    }
    return null;
}

export async function publishBlog(blogID: string): Promise<string | null> {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/publish/${blogID}`;
    const options: RequestInit = {
        method: "PATCH",
        credentials: "include",
    };
    const response = await fetch(url, options);
    const result: IApiResponse<IBlog> = await response.json();
    if (result.error) {
        return result.error;
    }

    return null;
}

export async function unPublishBlog(blogID: string): Promise<string | null> {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const url = `${serverURL}/api/blogs/un-publish/${blogID}`;
    const options: RequestInit = {
        method: "PATCH",
        credentials: "include",
    };
    const response = await fetch(url, options);
    const result: IApiResponse<IBlog> = await response.json();
    if (result.error) {
        return result.error;
    }
    return null;
}
