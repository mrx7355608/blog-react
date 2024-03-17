import { FaRegCheckCircle } from "react-icons/fa";

export default function SuccessToast({ message }: { message: string }) {
    return (
        <div className="alert alert-success w-72 text-black">
            <FaRegCheckCircle size={20} color="inherit" />
            <span>{message}</span>
        </div>
    );
}
