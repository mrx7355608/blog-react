import { useState } from "react";
import Spinner from "../main/Spinner";

interface IDeleteButtonProps {
    isLoading: boolean;
    removeBlog: () => void;
}

export default function DeleteBlogBtn({
    removeBlog,
    isLoading,
}: IDeleteButtonProps) {
    const [isDoubleCheck, setDoubleCheck] = useState(false);

    return (
        <>
            {!isDoubleCheck ? (
                <button
                    className="btn btn-error flex-1"
                    onClick={() => {
                        setDoubleCheck(true);
                        setTimeout(() => setDoubleCheck(false), 10000);
                    }}
                >
                    Delete
                </button>
            ) : (
                <button className="btn btn-error flex-1" onClick={removeBlog}>
                    {isLoading ? <Spinner /> : "Click again to delete"}
                </button>
            )}
        </>
    );
}
