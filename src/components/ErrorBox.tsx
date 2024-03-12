import React from "react";

export default function ErrorBox({ error }: { error: string }) {
    return (
        <div className="pt-12 w-full h-full flex items-center justify-start flex-col">
            <h1 className="text-4xl text-gray-100 font-black">
                Oops! An Error Occurred
            </h1>
            <p className="text-gray-500 mt-4 font-regular text-xl">{error}</p>
        </div>
    );
}
