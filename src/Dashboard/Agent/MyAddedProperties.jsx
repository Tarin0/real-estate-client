import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";


const MyAddedProperties = () => {
    const { user } = useAuth();
    const addedProperties = useLoaderData();
    const myAddedProperties = addedProperties.filter(t =>
        t.email === user?.email);
    const [propertyInfo, setPropertyInfo] = useState(myAddedProperties);
  
    console.log(addedProperties);
    console.log(myAddedProperties);

    const handleDelete = async (property) => {
        try {
            const id = property._id;
            // Remove property from state
            const remainingProperty = propertyInfo.filter(pro => pro._id !== id);
            setPropertyInfo(remainingProperty);
    
            const deleteResponse = await fetch(`https://real-estate-server-one.vercel.app/add-property/${id}`, {
                method: 'DELETE',
            });
    
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete property : ${deleteResponse.statusText}`);
            }
    
            const deleteData = await deleteResponse.json();
            toast.success("Deleted Property :", deleteData);
        } catch (err) {
            toast.error(err);
        }
    }
    

    return (
        <div className="grid grid-cols-2 gap-10 mb-10">
            {propertyInfo && propertyInfo.map((property, index) => (
                <div key={index} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                    <div className="flex space-x-4">
                        <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{property?.name}</a>

                        </div>
                    </div>
                    <div>
                        <img src={property?.imageURL} alt="" className="object-cover w-full mb-4 h-36 sm:h-96 bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">{property?.title}</h2>
                        <p className="  text-gray-400">Location : {property?.address},{property?.city},{property?.country}</p>
                        <div className=" flex space-x-5 text-gray-400">
                            <p className="  text-gray-400">Verification Status: {property?.status}</p>
                            <p className="  text-gray-400">Price : ${property?.startPrice} - ${property?.endPrice}</p>

                        </div>

                        <div className="ml-14 flex gap-16">
                            <Link to={`/dashboard/update-property/${property._id}`} className="btn mt-5 px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                                Update
                            </Link>
                            <button onClick={() => handleDelete(property)} className="btn mt-5 px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            ))}



        </div>
    );
};

export default MyAddedProperties;