import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};

export default App;