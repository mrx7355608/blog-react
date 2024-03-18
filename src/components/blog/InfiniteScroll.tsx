import { useState, useEffect } from "react";
import useAuthFetch from "../../hooks/useAuthFetch";
import * as blog from "../../types/blog";
import { Spinner } from "../main/Spinner";
import InfiniteScrollComponent from "react-infinite-scroll-component";

interface IInfiniteScrollProps {
    endpoint: string;
    Card: ({ blog }: { blog: blog.IBlog }) => JSX.Element;
}

export default function InfiniteScroll({
    endpoint,
    Card,
}: IInfiniteScrollProps) {
    const serverUrl = import.meta.env.VITE_SERVER_URL;

    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState<blog.IBlog[]>([]);
    const { error, loading, response } = useAuthFetch<blog.IBlog[]>(
        `${serverUrl}${endpoint}?page=${page}`
    );

    useEffect(() => {
        if (response) {
            if (response.data.length < 10) {
                setHasMore(false);
                setBlogs([...blogs, ...response.data]);
            } else {
                setBlogs([...blogs, ...response.data]);
            }
        }
    }, [response]);

    return (
        <div className="w-full">
            {loading && <Spinner />}
            {response && (
                <InfiniteScrollComponent
                    dataLength={response?.data.length as number}
                    hasMore={hasMore}
                    next={() => setPage(page + 1)}
                    loader={<Spinner />}
                    endMessage={<h3></h3>}
                >
                    {blogs.map((blog: blog.IBlog) => {
                        return <Card key={blog._id} blog={blog} />;
                    })}
                </InfiniteScrollComponent>
            )}
            {error && <p className="text-red-700 font-bold text-lg">{error}</p>}
        </div>
    );
}
