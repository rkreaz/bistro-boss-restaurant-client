import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shard/Navbar/Navbar";
import Footer from "../Pages/Shard/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooterLogin = location.pathname.includes('login');
    const noHeaderFooterRegister = location.pathname.includes('register');
    return (
        <div>
             {noHeaderFooterLogin || noHeaderFooterRegister ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooterLogin || noHeaderFooterRegister ||  <Footer></Footer>}
        </div>
    );
};

export default Main;