export const Dashboard = () => {
    return (
        <div className="flex items-start w-full flex-col gap-3 p-6">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-4xl font-bold inline">Blogs</h1>
                <button className="btn btn-error text-white">Logout</button>
            </div>
            <div>{/* TODO: render blogs */}</div>
        </div>
    );
};
