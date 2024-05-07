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
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsres/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Contact from "../Pages/Home/Contact/Contact";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
                element: <OurShop></OurShop>
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/userHome',
                element: <UserHome></UserHome>,
            },
            {
                path: '/dashboard/cart',
                element: <Cart></Cart>,
            },
            {
                path: '/dashboard/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/dashboard/reservation',
                element: <Payment></Payment>,
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>,
            },

            // Admin Users Panel
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute> <AdminHome></AdminHome></AdminRoute>,
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>,
            },
            {
                path: '/dashboard/manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
            },
            {
                path: '/dashboard/updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`https://bistro-boss-restaurant-server-steel.vercel.app/menu/${params.id}`)
            }
        ]
    }
]);