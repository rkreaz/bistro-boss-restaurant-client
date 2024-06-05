import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../hooks/useCard";
import useAdmin from "../../../hooks/useAdmin";
import logoMan from '../../../assets/others/profile.png'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [card] = useCard();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <div className='nav'>
            <NavLink className='nav uppercase' to={'/'}>HOME</NavLink>
            <NavLink className='nav uppercase' to={'/menu'}>Our Menu</NavLink>
            <NavLink className='nav uppercase' to={'/shop/popular'}>Our Shop</NavLink>
            <NavLink className='nav uppercase' to={'/contact'}>Contact</NavLink>



            {
                user && isAdmin && <NavLink className='nav uppercase' to={'/dashboard/adminHome'}>Dashboard</NavLink>
            }
            {
                user && !isAdmin && <NavLink className='nav uppercase' to={'/dashboard/userHome'}>Dashboard</NavLink>
            }
        </div>

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-95 bg-[#FF6A00] text-[#fff] py-2 ">
                <div className="max-w-6xl w-full mx-auto justify-between items-center">
                    <div className="flex py-2">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-[#870505d4] rounded-box w-72">
                                {navLink}
                            </ul>
                        </div>
                        <Link className="" to={'/'}>
                            <img className="w-full h-12" src="https://i.ibb.co/68H1Xmt/Screenshot-67-removebg-preview.png" alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>


                        {
                            user?.email ?
                                <>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="btn m-1 ">
                                            <div>
                                                <img className="rounded-full w-10 h-10" src={user?.photoURL ? user.photoURL : `${logoMan}`} />
                                            </div>
                                        </div>
                                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact max-w-64 shadow bg-[#ff6a00e6] text-primary-content mt-4">
                                            <div className="card-body text-center">
                                                <img className="w-16 h-16 rounded-full mx-auto" src={user?.photoURL ? user?.photoURL : `${logoMan}`} />
                                                <h3 className="text-[#fff] text-xl font-semibold">{user.displayName}</h3>
                                                <p className="text-[#fff] text-base font-semibold">{user.email}</p>
                                                <h2 onClick={handleLogOut} className="bg-[#FF6A00] text-[#fff] hover:bg-[#c94646] text-lg font-semibold rounded-lg py-1 cursor-pointer">Log Out</h2>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <NavLink className={"navMenu"} to='/login'>Login</NavLink>
                        }


                    </div>

                    <div className=" flex">
                        <Link className='nav' to={'/dashboard/cart'}>
                            <button className="btn bg-transparent border-[#fff] px-3 hover:bg-transparent">
                                <FaShoppingCart className="text-sm"></FaShoppingCart>
                                <div className="badge bg-[#fff] text-[#FF6A00] border-0 px-3 font-semibold text-base">+{card.length}</div>
                            </button>
                        </Link>

                    </div>
                </div>


            </div>
        </>
    );
};

export default Navbar;