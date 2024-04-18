import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shard/Navbar/Navbar";
import Footer from "../Pages/Shard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;