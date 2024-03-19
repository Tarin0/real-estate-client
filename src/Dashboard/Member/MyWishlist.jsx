import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const MyWishlist = () => {
    const allWishlist = useLoaderData();
    const {user} = useAuth();
    const myWishlist = allWishlist.filter( wishes => wishes.userEmail === user?.email);

    const [wishInfo, setWishInfo] = useState(myWishlist);

    const handleDelete = async (wish) => {
        try {
            const id = wish._id;
            // Remove property from state
            const remainingWishlist = wishInfo.filter(pro => pro._id !== id);
            setWishInfo(remainingWishlist);
    
            const deleteResponse = await fetch(`http://localhost:5000/wishlist/${id}`, {
                method: 'DELETE',
            });
    
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete property : ${deleteResponse.statusText}`);
            }
    
            const deleteData = await deleteResponse.json();
            toast.success("Deleted Wish", deleteData);
        } catch (err) {
            toast.error(err);
        }
    }


    return (
        <div>
             <div className="grid grid-cols-2 gap-10 mb-10">
           {wishInfo.map( wish =>
            <div key={wish._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
               <div className="flex space-x-4">
                   <img alt="" src={wish?.agentImage} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                   <div className="flex flex-col space-y-1">
                       <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{wish?.agentName}</a>

                   </div>
               </div>
               <div>
                   <img src={wish?.propertyImage} alt="" className="object-cover w-full mb-4 h-36 sm:h-96 bg-gray-500" />
                   <h2 className="mb-1 text-xl font-semibold">{wish?.propertyTitle}</h2>
                   <div className=" text-sm text-gray-400">

                       <p className="text-sm dark: text-gray-400">Location : {wish?.propertyAddress} , {wish?.propertyCity} , {wish?.propertyCountry}</p>
                       <p className="text-sm dark: text-gray-400">Verification Status: Verified </p>
                       <p className="text-sm dark: text-gray-400">Price : ${wish?.startPrice} - ${wish?.endPrice} </p>

                   </div>
                   
                  <div className="flex gap-11">
                  <Link to={`/dashboard/wishlist-offer/${wish._id}`} className="btn mt-5 px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                       Make an Offer
                   </Link>
                   <button onClick={() => handleDelete(wish)} className="btn mt-5 px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                       Remove
                   </button>
                  </div>
               </div>
               
           </div>

           )}
           
           
         
       </div>
        </div>
    );
};

export default MyWishlist;