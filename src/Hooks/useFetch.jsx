import React from "react";

export default function useFetch(url) {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const cache = React.useRef({});

    React.useEffect(() => {
        console.log("calling api for blogs");
        console.log(url);
        fetch(url)
            .then(async (resp) => {
                const result = await resp.json();
                console.log(result.length);
                if (!resp.ok) return setError({ message: result.error });
                cache.current[url] = result;
                return result;
            })
            .then((r) => {
                setLoading(false);
                setData(r);
            })
            .catch((err) => {
                setLoading(false);
                if (err.name === "TypeError") {
                    return setError({ message: "It seems that the server is down" });
                }
                setError(err);
            });
    }, [url]);

    return { loading, data, error };
}
