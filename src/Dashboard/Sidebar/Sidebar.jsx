import { useContext, useEffect, useState } from 'react'

// Icons
import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'

import MenuItem from './MenuItem'
// import ToggleBtn from '../../Shared/ToggleBtn'
// import useAuth from '../../hooks/useAuth';
// import useRole from '../../hooks/useRole';
import AgentNav from '../TableRow/AgentNav';
import AdminNav from '../TableRow/AdminNav'
import MemberNav from '../TableRow/MemberNav'
import { FaHome, FaRegUser, FaUser, FaUsers } from 'react-icons/fa'
import { IoSettings } from "react-icons/io5";
import toast from 'react-hot-toast'
import { AuthContext } from '../../Providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    // const [toggle, setToggle] = useState(false)
    const [isActive, setActive] = useState(false)
    const { user, logOut } = useContext(AuthContext);
   
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const response = await fetch(`https://real-estate-server-one.vercel.app/user/${user?.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                const userRole = data.role;
                setRole(userRole);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserRole();
    }, [user?.email]);

  
    // const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await logOut();
        toast.success("user logout successfully");
        navigate('/');
        // Force a component re-render by updating the state or using a refresh strategy.
    };
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-900 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <img className='h-10' src="logo.png" alt="" />
                    </div>
                </div>

                <button
                    
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-700 w-68 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='bg-black w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <img className=' h-12' src="logo.png" alt="" />
                            
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        <nav>
                        <MenuItem
                            icon={FaHome}
                            label='Home'
                            address='/'
                        />
                        <hr />
                        </nav>
                        {/* Admin nav  */}
                        {role ==='admin' && <AdminNav></AdminNav>}
                        {/* trainer nav */}
                        { role ==='agent' && <AgentNav></AgentNav>}
                        {/* trainer nav */}
                        {role ==='member' && <MemberNav></MemberNav>}
                        
                        
                    </div>
                    
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={FaUser}
                        label='Profile'
                        address='profile'
                    />
                    <button onClick={logOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5 text-gray-100' />

                        <span onClick={handleLogout} className='mx-4 font-medium text-gray-100'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
