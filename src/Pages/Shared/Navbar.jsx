import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logOut();
        toast.success("user logout successfully");
        navigate('/');
        // Force a component re-render by updating the state or using a refresh strategy.
    };
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/all-properties">All Properties</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>

                        </ul>
                    </div>
                    <img className=' bg-black rounded-lg h-12' src="logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/all-properties">All Properties</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.email ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-16 rounded-xl ">
                                        <img className="w-10" src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                    </li>
                                    <li>
                                        <button className="btn btn-sm  btn-ghost"
                                            onClick={handleLogout}
                                        >Logout</button>

                                    </li>
                                </ul>
                            </div>
                            :
                            <ul>
                                <li>
                                    <NavLink to="/login">
                                        <button className="btn">  Login</button>
                                    </NavLink>
                                </li>
                            </ul>

                    }
                    {/* <Link to="/login">Login</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;