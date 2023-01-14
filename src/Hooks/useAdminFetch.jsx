import React from "react";

export default function useAdminFetch(url) {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const options = {
            mode: "cors",
            credentials: "include"
        };
        (async function () {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setLoading(false);
                if (!response.ok) return setError({ message: result.error });
                setData(result);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        })();
    }, []);

    return { loading, data, error };
}
