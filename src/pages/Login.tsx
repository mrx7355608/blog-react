import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/admin.services";

export default function Login() {
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [creds, setCreds] = useState({
        username: "",
        password: "",
    });

    return (
        <form
            className="h-screen flex flex-col items-center justify-center w-full"
            onSubmit={onSubmitHandler}
        >
            {/* Login page heading */}
            <h1 className="text-3xl font-bold mb-8">Login to your account</h1>

            {/* Show errors if any */}
            {error ? (
                <p className="bg-red-200 text-red-700 text-lg font-medium p-3 w-full mt-3 rounded-md max-w-md mb-3">
                    {error}
                </p>
            ) : null}

            {/* Username and Password inputs */}
            <input
                className="input input-bordered w-full max-w-md"
                type="text"
                name="username"
                placeholder="Username"
                onChange={onChangeHandler}
            />
            <input
                className="input input-bordered w-full max-w-md mt-4"
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChangeHandler}
            />

            {/* Login button */}
            <button
                className="btn btn-warning w-full max-w-md mt-4"
                type="submit"
            >
                {loading ? <LoginLoading /> : "Login"}
            </button>
        </form>
    );

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setCreds({ ...creds, [name]: value });
    }

    async function onSubmitHandler(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Make request to api
        try {
            const result = await loginAdmin(creds);
            if (result.error) {
                return setError(result.error);
            }
            navigateTo("/");
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }
}

function LoginLoading() {
    return <span className="loading loading-spinner loading-md"></span>;
}
