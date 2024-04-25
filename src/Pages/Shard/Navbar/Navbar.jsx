import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCard from "../../../hooks/useCard";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [card] = useCard();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <div className='nav'>
            <NavLink className='nav uppercase' to={'/'}>HOME</NavLink>
            <NavLink className='nav uppercase' to={'/menu'}>Our Menu</NavLink>
            <NavLink className='nav uppercase' to={'/shop/salad'}>Our Shop</NavLink>
            <NavLink className='nav uppercase' to={'/parsonal'}>Parsonal</NavLink>

            <NavLink className='nav' to={'/dashboard/cart'}>
                <button className="btn bg-transparent border-0 hover:bg-transparent p-0">
                    <FaShoppingCart className="text-sm"></FaShoppingCart>
                    <div className="badge badge-secondary mr-4">+{card.length}</div>
                </button>
            </NavLink>


            {/* {
                user ?
                    <>
                        <NavLink onClick={handleLogOut} className='nav uppercase'>Log Out</NavLink>
                    </>
                    :
                    <>
                        <NavLink className='nav uppercase' to={'/login'}>Login</NavLink>
                    </>
            } */}

        </div>

    </>
    return (
        <>
            <div className="navbar text-[#fff] py-5 fixed z-10 bg-opacity-60 bg-black max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <h1 className="text-xl font-bold">BISTRO BOSS</h1>
                        <p className="text-base uppercase">Restaurant</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>


                    {
                        user?.email ?
                            <>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button">
                                        <div>
                                            <img className="rounded-full w-10 h-10" src={user?.photoURL ? user.photoURL : `${logoMan}`} />
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-52 shadow bg-[#ddc9c5] text-primary-content  mt-2">
                                        <div className="card-body text-center">
                                            <img className="w-16 h-16 rounded-full mx-auto" src={user?.photoURL ? user?.photoURL : `${logoMan}`} />
                                            <h3 className="text-[#fff] text-xl font-semibold">{user.displayName}</h3>
                                            <p className="text-[#fff] text-base font-semibold">{user.email}</p>
                                            <h2 onClick={handleLogOut} className="bg-[#FF3811] text-[#fff] hover:bg-[#c94646] text-lg font-semibold rounded-lg py-1 cursor-pointer">Log Out</h2>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <NavLink className={"navMenu"} to='/login'>Login</NavLink>
                    }






                </div>

                {/* <div className="">
                    <a className="">SIGN OUT</a>
                    <p className="text-2xl ml-2"><CgProfile /></p>
                </div>
                 */}
            </div>
        </>
    );
};

export default Navbar;