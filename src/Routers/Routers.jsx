import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuSection/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
             {
                 path: '/',
                 element: <Home></Home>
             },
             {
                 path: '/menu',
                 element: <Menu></Menu>
             },
             {
                 path: '/shop',
                 element: <OurShop></OurShop>
             }
        ]
    },
]);