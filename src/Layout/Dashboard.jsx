import { FaCalendar, FaShoppingBag, FaHome, FaShoppingCart, FaCcAmazonPay, FaUtensils, FaList, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { IoIosCall, IoMdMenu } from "react-icons/io";
import useCard from '../hooks/useCard';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [card] = useCard();
    const [isAdmin] = useAdmin();

    return (
        <div className=''>
            <div className='max-w-6xl mx-auto'>
                <div className='flex'>
                    <div className='w-64 min-h-screen bg-[#FB6E09]'>
                        <div className=' px-8 mt-14'>
                            <Link className="" to={'/'}>
                                <img className="w-40 h-12" src="https://i.ibb.co/68H1Xmt/Screenshot-67-removebg-preview.png" alt="" />
                            </Link>
                        </div>
                        <ul className='menu p-4 text-[#fff] text-lg font-medium mt-5'>


                            {
                                isAdmin ?
                                    <>


                                        <li>
                                            <NavLink to={'/dashboard/adminHome'}>
                                                <FaHome></FaHome>
                                                Admin Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/addItems'}>
                                                <FaUtensils></FaUtensils>
                                                Add Items </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/manageItems'}>
                                                <FaList></FaList>
                                                Manage Items</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/users'}>
                                                <FaUser></FaUser>
                                                All Users</NavLink>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <NavLink to={'/dashboard/userHome'}>
                                                <FaHome></FaHome>
                                                User Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/reservation'}>
                                                <FaCalendar></FaCalendar>
                                                Reservation </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/paymentHistory'}>
                                                <FaCcAmazonPay></FaCcAmazonPay>
                                                Payment History</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/dashboard/cart'}>
                                                <FaShoppingCart></FaShoppingCart>
                                                My Card ({card.length})</NavLink>
                                        </li>
                                    </>
                            }


                            <div className="border-t-2 mt-5 mb-5"></div>

                            <li>
                                <NavLink to={'/'}>
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/menu'}>
                                    <IoMdMenu></IoMdMenu>
                                    Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/shop/salad'}>
                                    <FaShoppingBag />
                                    Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/contact'}>
                                    <IoIosCall />
                                    Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;