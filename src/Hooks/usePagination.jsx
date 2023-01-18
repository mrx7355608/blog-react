import { useState, useEffect } from "react";
import { UrlQueryGenerator } from "../UrlGenerator";
import appConfig from "../../config/appConfig";

export default function usePagination({ url, setUrl, loading, error, data }) {
    const [isMoreContent, setIsMoreContent] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);

    function stopPagination() {
        setIsMoreContent(false);
    }
    function resetPagination() {
        setPage(1);
        setIsMoreContent(true);
    }
    function paginate() {
        const { create } = UrlQueryGenerator({ url, query: "page" });
        const newQuery = create(page + 1);
        setPage(page + 1);
        setUrl(`${appConfig.apiUrl}/blogs?${newQuery}`);
    }

    useEffect(() => {
        if (!loading && !error && data) {
            // Limit is 10 per page
            // If data length is less than 10 it means
            // that there is no more content left and so pagination should stop
            if (data.length < 10) stopPagination();

            // If pagination is stopped but data length is or more than 10
            // then reset pagination
            if (!isMoreContent && !data.length < 10) resetPagination();

            // set new data
            return setBlogs((prev) => {
                if (!url.includes("page")) {
                    return [...data];
                }
                return [...prev, ...data];
            });
        }
    }, [data]);

    return { blogs, isMoreContent, paginate };
}
