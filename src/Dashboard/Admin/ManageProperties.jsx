import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


const ManageProperties = () => {
    const allProperties = useLoaderData();
    // const { user } = useContext(AuthContext);
    // const { email } = user;
    // const bidRequests = bids.filter(bid => bid.ownerEmail === email);


    
    // Filter the initial bids with a different variable name
    // const initialBidRequests = properties.filter(pro => pro.email === email);

    // Use state to track the bid data
    const [properties, setProperties] = useState(allProperties);

   

    const handleBidAction = (propertyId, action) => {
        const updatedBids = allProperties.map(pro => {
            if (pro._id === propertyId) {
                pro.status = action;

                // Send a PUT request to update bid status
                fetch(`https://real-estate-server-one.vercel.app/add-property/${pro._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: action }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.modifiedCount>0) {
                            toast.success('Property status updated');
                        } else {
                            toast.error('Failed to update property status');
                            pro.status = 'pending'; // Revert status on failure
                        }
                    })
                    .catch(error => {
                        toast.error('An error occurred');
                        console.log(error);
                        pro.status = 'pending'; // Revert status on network error
                    });
            }
            return pro;
        });
        setProperties(updatedBids);

        
    };


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
                                <th className="p-3">Property Title</th>
                                <th className="p-3">Property Location</th>
                                <th className="p-3">Agent Email</th>
                                <th className="p-3">Agent Name</th>
                                <th className="p-3 "> Price</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                properties.map(property =>
                                    <tr key={property._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>{property?.title}</p>
                                </td>
                                <td className="p-3">
                                    <p>{property?.address},{property?.city},{property?.country}</p>
                                </td>
                                <td className="p-3">
                                    <p>{property?.email}</p>
                                </td>
                                <td className="p-3">
                                    <p>{property?.name}</p>
                                </td>
                                <td className="p-3 ">
                                    <p>${property?.startPrice} - ${property?.endPrice}</p>
                                </td>
                                <td className="p-3 ">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>{property?.status}</span>
                                    </span>
                                </td>
                                <td className=" bg-white">
                                    {property?.status === "pending" && (
                                        
                                        <button className="btn btn-outline btn-success"
                                            onClick={() => handleBidAction(property._id, "verified")}
                                        >
                                            Accept
                                        </button>
                                    )}
                                </td>
                                <td className="bg-white">
                                    {property.status === "pending" && (
                                        <button className="btn btn-outline btn-error"
                                            onClick={() => handleBidAction(property._id, "rejected")}
                                        >
                                            Reject
                                        </button>
                                    )}
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

export default ManageProperties;