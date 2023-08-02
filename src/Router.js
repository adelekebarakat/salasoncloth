import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import NavBar from "./component/Navbar";

const Router = () =>{
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        </Routes>
        </BrowserRouter>
    )

}
export default Router;