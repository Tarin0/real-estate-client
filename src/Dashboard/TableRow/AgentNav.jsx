import MenuItem from "../Sidebar/MenuItem";
import { FaBalanceScale, FaRegUser, FaUserCheck, FaUsers } from "react-icons/fa";


const AgentNav = () => {
    return (
        <>
            <nav>
                            <MenuItem
                                icon={FaUserCheck}
                                label='Add Property'
                                address='add-property'
                            />

                            <MenuItem
                                icon={FaUsers}
                                label='My Added Properties'
                                address='my-added-properties'
                            />
                            <MenuItem
                                icon={FaRegUser}
                                label='My Sold Properties'
                                address='my-sold-properties'
                            />
                            <MenuItem
                                icon={FaBalanceScale}
                                label='Offered Properties'
                                address='offered-properties'
                            />
                        </nav>
        </>
    );
};

export default AgentNav;