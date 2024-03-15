import { useState } from "react";

export default function useToast() {
    const [successToast, setShowSuccessToast] = useState({
        message: "",
        isVisible: false,
    });
    const [errorToast, setShowErrorToast] = useState({
        message: "",
        isVisible: false,
    });

    if (successToast.isVisible) {
        return (
            <div className="toast toast-end">
                <div className="alert alert-success">
                    <span>{successToast.message}</span>
                </div>
            </div>
        );
    }

    if (errorToast.isVisible) {
        return (
            <div className="toast toast-end">
                <div className="alert alert-error">
                    <span>{errorToast.message}</span>
                </div>
            </div>
        );
    }

    function showSuccessToast(message: string) {
        setShowSuccessToast({
            message: message,
            isVisible: true,
        });
    }

    function showErrorToast(message: string) {
        setShowErrorToast({
            message: message,
            isVisible: true,
        });
    }

    return { showSuccessToast, showErrorToast };
}
