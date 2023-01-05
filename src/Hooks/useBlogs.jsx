import React from "react";

export default function useBlogs() {
    const [loading, setLoading] = React.useState(true);
    const [blogs, setBlogs] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:8000/api/v1/blogs", {
            mode: "cors"
        })
            .then((resp) => resp.json())
            .then((data) => {
                setLoading(false);
                setBlogs(data);
            })
            .catch((err) => setError(err));
    }, []);

    return { loading, blogs, error };
}
