import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

import Home from "../Pages/Home/Home";
import Navbar from "../Pages/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           {/* <Home></Home> */}
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>     
        </div>
    );
};

export default Main;