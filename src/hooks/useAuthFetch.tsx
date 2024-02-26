import { useState, useEffect } from "react";

interface IApiResponse<T> {
    ok: boolean;
    data: T;
    error?: string;
}

export default function useAuthFetch<T>(url: string) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [response, setResponse] = useState<IApiResponse<T> | null>(null);

    useEffect(() => {
        fetch(url, {
            method: "GET",
            credentials: "include",
        })
            .then((resp) => resp.json())
            .then((data: IApiResponse<T>) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setResponse(data);
                }
            })
            .catch(() => setError("Something went wrong!"))
            .finally(() => setLoading(false));
    }, [url]);

    return { loading, error, response };
}
