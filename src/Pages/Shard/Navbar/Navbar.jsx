import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'

const Navbar = () => {
    const navLink = <>
        <div className='nav'>
            <NavLink className='nav uppercase'>HOME</NavLink>
            <NavLink className='nav uppercase'>CONTACT US</NavLink>
            <NavLink className='nav uppercase'>DASHBOARD</NavLink>
            <NavLink className='nav uppercase'>Our Menu</NavLink>
            <NavLink className='nav uppercase'>Our Shop</NavLink>
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
                    <div>
                        <h1 className="text-xl font-bold">BISTRO BOSS</h1>
                        <p className="text-base uppercase">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="">
                    <a className="">SIGN OUT</a>
                    <p className="text-2xl ml-2"><CgProfile /></p>

                </div>
            </div>
        </>
    );
};

export default Navbar;