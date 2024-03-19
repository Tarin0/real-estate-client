import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


const ManageUsers = () => {
    const allProperties = useLoaderData();
    const { user } = useContext(AuthContext);
    const { email } = user;
    // const bidRequests = bids.filter(bid => bid.ownerEmail === email);


    
    // Filter the initial bids with a different variable name
    // const initialBidRequests = properties.filter(pro => pro.email === email);

    // Use state to track the bid data
    const [properties, setProperties] = useState(allProperties);

   

    const handleAdminAction = (userEmail, action) => {
        const updatedRoles = allProperties.map(pro => {
            if (pro.email === userEmail) {
                pro.role = action;

                // Send a PUT request to update bid status
                fetch(`http://localhost:5000/user/${pro.email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ role: action }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.modifiedCount>0) {
                            toast.success('Property status updated');
                        } else {
                            toast.error('Failed to update property status');
                            // pro.status = 'pending';
                             // Revert status on failure
                        }
                    })
                    .catch(error => {
                        toast.error('An error occurred');
                        console.log(error);
                        // Revert status on network error
                    });
            }
            return pro;
        });
        setProperties(updatedRoles);

        
    };


    const handleFraudAction = (userEmail, action) => {
        const updatedBids = allProperties.map(pro => {
            if (pro.email === userEmail) {
                pro.status = action;

                // Send a PUT request to update bid status
                fetch(`http://localhost:5000/user/${pro.email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: action }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.modifiedCount>0) {
                            toast.success(' status updated');
                        } else {
                            toast.error('Failed to update  status');
                            pro.status = 'verified'; // Revert status on failure
                        }
                    })
                    .catch(error => {
                        toast.error('An error occurred');
                        console.log(error);
                        pro.status = 'verified'; // Revert status on network error
                    });
            }
            return pro;
        });
        setProperties(updatedBids);

        
    };

    const [propertyInfo, setPropertyInfo] = useState(allProperties);
  
    
    const handleDelete = async (property) => {
        try {
            const id = property._id;
            // Remove property from state
            const remainingProperty = propertyInfo.filter(pro => pro._id !== id);
            setPropertyInfo(remainingProperty);
            setProperties(remainingProperty);
    
            const deleteResponse = await fetch(`http://localhost:5000/user/${id}`, {
                method: 'DELETE',
            });
    
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete user : ${deleteResponse.statusText}`);
            }
    
            const deleteData = await deleteResponse.json();
            toast.success("Deleted User :", deleteData);
        } catch (err) {
            toast.error(err);
        }
    }

    useEffect(() => {
        setProperties(allProperties);
    }, [allProperties]);


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl text-gray-600 font-semibold leadi">Manage Properties</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col className=""></col>
                            <col></col>
                            
                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Agent Name</th>
                                <th className="p-3">Agent Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                properties.map(property =>
                                    <tr key={property._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>{property?.name}</p>
                                </td>
                                <td className="p-3">
                                    <p>{property?.email}</p>
                                </td>
                                <td className="p-3 ">
                                    
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>{property?.role}</span>
                                    </span>
                                </td>
                                <td className="p-3">
                                <p>{property?.status}</p>
                                </td>
                                <td className=" bg-white">
                                {(property?.role === "member" || property?.role === "agent") && (
                                        
                                        <button className="btn btn-outline btn-success"
                                            onClick={() => handleAdminAction(property.email, "admin")}
                                            disabled={property?.status === "fraud"}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                    {property?.role === "member" && (
                                        
                                        <button className="btn btn-outline btn-success"
                                            onClick={() => handleAdminAction(property.email, "agent")}
                                            disabled={property?.status === "fraud"}
                                        >
                                            Make Agent
                                        </button>
                                    )}
                                    {property?.role === "agent" && (
                                        
                                        <button className="btn btn-outline btn-error"
                                            onClick={() => handleFraudAction(property.email, "fraud")}
                                            disabled={property?.status === "fraud"}
                                        >
                                            Make Fraud
                                        </button>
                                    )}
                                    <button className="btn btn-outline btn-error"
                                            onClick={() => handleDelete(property)}
                                        >
                                            Delete User
                                        </button>
                                   
                                </td>
                               
                            </tr>)
                            }
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;