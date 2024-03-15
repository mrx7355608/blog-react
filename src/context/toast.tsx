import { ReactNode, createContext, useContext, useState } from "react";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";

interface IToastContext {
    showSuccessToast: (message: string) => void;
    showErrorToast: (message: string) => void;
}

const ToastContext = createContext<IToastContext>({
    showErrorToast: (message) => null,
    showSuccessToast: (message) => null,
});
export const useToast = () => useContext(ToastContext);

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState({
        isVisible: false,
        isSuccess: false,
        isError: false,
        message: "",
    });

    return (
        <ToastContext.Provider value={{ showSuccessToast, showErrorToast }}>
            {children}
            {toast.isVisible ? (
                <div className="toast toast-end">
                    {toast.isError && <ErrorToast message={toast.message} />}
                    {toast.isSuccess && (
                        <SuccessToast message={toast.message} />
                    )}
                </div>
            ) : null}
        </ToastContext.Provider>
    );

    function showSuccessToast(message: string) {
        setToast({
            isVisible: true,
            isSuccess: true,
            isError: false,
            message: message,
        });
    }

    function showErrorToast(message: string) {
        setToast({
            isVisible: true,
            isSuccess: false,
            isError: true,
            message: message,
        });
    }
}
