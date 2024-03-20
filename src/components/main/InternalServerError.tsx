import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function InternalServerError() {
    const error = useRouteError();

    if (isRouteErrorResponse(error) && error.status === 401) {
        return (
            <div className="w-full h-screen flex flex-col items-center justify-center ">
                <h1 className="text-5xl font-bold">{error.data}</h1>
                <p className="text-gray-600 text-2xl mt-5">
                    Please login to continue
                </p>
                <Link to="/login">
                    <button className="btn btn-info max-w-md mt-8">
                        Login
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold">Something went wrong</h1>
            <p className="text-gray-500 text-2xl mt-5">
                It seems that the server is down
            </p>
        </div>
    );
}
