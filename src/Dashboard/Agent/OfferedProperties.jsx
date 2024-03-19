import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const OfferedProperties = () => {
    const { user } = useAuth();
    const allProperties = useLoaderData();
    const mySoldProperties = allProperties.filter(t =>
        t.agentEmail === user?.email );
    const [propertyInfo, setPropertyInfo] = useState(mySoldProperties);
    // const newPending = mySoldProperties.filter(t => t.status === "pending");
    // setPropertyInfo(newPending);
    const handleFraudAction = (id, action) => {
        const updatedBids = mySoldProperties.map(pro => {
            if (pro._id === id) {
                pro.status = action;

                // Send a PUT request to update bid status
                fetch(`https://real-estate-server-one.vercel.app/wishlist-offer/${pro._id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: action }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            toast.success(' status updated');
                        } else {
                            toast.error('Failed to update  status');
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
        setPropertyInfo(updatedBids);


    };


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl text-gray-600 font-semibold leadi">Offered Properties</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col className="w-24"></col>
                            

                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Property Title</th>
                                <th className="p-3">Property Location</th>
                                <th className="p-3">Buyer Email</th>
                                <th className="p-3">Buyer Name</th>
                                <th className="p-3 text-right">Offered Price</th>
                                <th className="p-3">Status</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {propertyInfo.map(prop =>

                                <tr key={prop._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                    <td className="p-3">
                                        <p>{prop?.propertyTitle}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{prop?.propertyAddress},{prop?.propertyCity},{prop?.propertyCountry}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{prop?.buyerEmail}</p>
                                    </td>
                                    <td className="p-3">
                                        <p className="text-gray-400">{prop?.buyerName}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>${prop?.offeredAmount}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>{prop?.status}</p>
                                    </td>
                                    <td>
                                        <div className='bg-white flex justify-evenly mt-5'>
                                            <button className="btn btn-outline btn-success"
                                                onClick={() => handleFraudAction(prop._id, "accepted")}
                                                disabled={prop?.status === "accepted"}
                                            >
                                                Confirm
                                            </button>

                                            <button className="btn btn-outline btn-error"
                                                onClick={() => handleFraudAction(prop._id, "rejected")}
                                                disabled={prop?.status === "rejected" || prop?.status === "accepted"}
                                            >
                                                Reject
                                            </button>


                                        </div>
                                    </td>
                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OfferedProperties;