import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/home/Home";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import NotFound from "../views/notfound/NotFound";


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;