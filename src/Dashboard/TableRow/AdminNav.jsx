import MenuItem from "../Sidebar/MenuItem";

import { FaBalanceScale,FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";

const AdminNav = () => {
    return (
        <>
            <nav>
                        <MenuItem
                            icon={FaUserCheck}
                            label='Manage Users'
                            address='manage-users'
                        />

                        <MenuItem
                            icon={FaUsers}
                            label='Manage Properties'
                            address='manage-properties'
                        />
                       
                       
                        <MenuItem
                            icon={FaBalanceScale}
                            label='Manage Reviews'
                            address='manage-reviews'
                        />
                    </nav>
        </>
    );
};

export default AdminNav;