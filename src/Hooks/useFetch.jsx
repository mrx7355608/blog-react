import React from "react";

export default function useFetch(url) {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((r) => {
                setLoading(false);
                setData(r);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    }, []);

    return { loading, data, error };
}
