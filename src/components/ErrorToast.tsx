import { MdOutlineCancel } from "react-icons/md";

export default function ErrorToast({ message }: { message: string }) {
    return (
        <div className="alert alert-error w-72">
            <MdOutlineCancel size={22} color="inherit" />
            <span>{message}</span>
        </div>
    );
}
