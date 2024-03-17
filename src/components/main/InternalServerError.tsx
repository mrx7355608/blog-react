export default function InternalServerError() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center ">
            <h1 className="text-5xl font-bold">Something went wrong</h1>
            <p className="text-gray-700 text-xl mt-4">
                Please try again in few minutes
            </p>
        </div>
    );
}
