import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout
import MainLayout from "./Layouts/MainLayout";
// Pages
import Home from "./Pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
