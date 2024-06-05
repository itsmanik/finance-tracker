import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";

const App = () => {
    return (
        <div className="font-serif">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </div>
    );
};

export default App;
