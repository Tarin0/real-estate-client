import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";


const PropertyBought = () => {
    const allPropertyBought = useLoaderData();
    const {user} = useAuth();
    const myPropertyBought = allPropertyBought.filter( pro => pro.buyerEmail === user?.email)
    const [properties, setProperties] = useState(myPropertyBought);
    const handlePayment = (id, action) => {
        const updatedBids = myPropertyBought.map(pro => {
            if (pro._id === id) {
                pro.status = action;

                // Send a PUT request to update bid status
                fetch(`http://localhost:5000/wishlist-offer/${pro._id}`, {
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
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mb-10">
           {properties.map(prop => 
           <div key={prop._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
           <div>
               <img src={prop?.propertyImage} alt="" className="object-cover w-full mb-4 h-36 sm:h-96 bg-gray-500" />
               <h2 className="mb-1 text-xl font-semibold">{prop?.propertyTitle}</h2>
               <div className=" text-sm text-gray-400">

               <p className="text-sm dark: text-gray-400">Location : {prop?.propertyAddress},{prop?.propertyCity},{prop?.propertyCountry}</p>
                   <p className="text-sm dark: text-gray-400">Offered Amount: ${prop?.offeredAmount}</p>
                   <p className="text-sm ">Status:  {prop?.status}</p>
                   <button onClick={() => handlePayment(prop._id, "accepted")}
                                            disabled={prop?.status === "accepted"}
                                            className="btn ">
                                                Pay</button>
               </div>
               
               
           </div>
           
       </div>
        
            )}
           
         
       </div>
        </div>
    );
};

export default PropertyBought;