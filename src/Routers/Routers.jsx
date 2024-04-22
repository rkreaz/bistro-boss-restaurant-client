import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuSection/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Parsonal from "../Parsonal/Parsonal";

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
                 path: '/shop/:category',
                 element:<OurShop></OurShop>
             },
             {
                 path: '/login',
                 element: <Login></Login>
             },
             {
                 path: '/register',
                 element: <Register></Register>
             },
             {
                 path: '/parsonal',
                 element: <PrivateRoute><Parsonal></Parsonal></PrivateRoute>
             }
        ]
    },
]);