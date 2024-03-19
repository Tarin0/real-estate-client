
import { FaBalanceScale, FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";

const MemberNav = () => {
    return (
        <>
            <nav>
                            <MenuItem
                                icon={FaUserCheck}
                                label='My Wishlist'
                                address='my-wishlist'
                            />
                            <MenuItem
                                icon={FaRegUser}
                                label='Property Bought'
                                address='property-bought'
                            />                          
                            <MenuItem
                                icon={FaBalanceScale}
                                label='My Reviews'
                                address='my-reviews'
                            />                          
                            
                        </nav>
        </>
    );
};

export default MemberNav;



