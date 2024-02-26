import { useEffect } from "react";
import useAuthFetch from "../../hooks/useAuthFetch";
import { BlogCard } from "../../components/BlogCard";

export interface IBlog {
    title: string;
    content: string;
    tags: string[];
    is_published: boolean;
    published_on: string;
}

export const Dashboard = () => {
    const { loading, error, response } = useAuthFetch<IBlog[]>(
        "http://localhost:8000/api/blogs",
    );

    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-bold inline">Blogs</h1>
                <button className="btn btn-error text-white">Logout</button>
            </div>
            <div></div>
        </div>
    );
};
