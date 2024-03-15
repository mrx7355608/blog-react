import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ToastProvider from "./context/toast.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ToastProvider>
        <App />
    </ToastProvider>
);
