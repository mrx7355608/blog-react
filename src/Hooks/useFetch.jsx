import React from "react";

const cache = {};

export default function useFetch(url) {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (cache[url]) {
            console.log("sent data from cache");
            setLoading(false);
            return setData(cache[url]);
        }
        console.log("calling api for blogs");
        fetch(url)
            .then(async (resp) => {
                const result = await resp.json();
                if (!resp.ok) return setError({ message: result.error });
                cache[url] = result;
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
