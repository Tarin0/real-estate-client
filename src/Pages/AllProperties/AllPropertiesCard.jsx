import { Link, useLoaderData } from "react-router-dom";


const AllPropertiesCard = () => {
    // const {user} = useAuth();
    const allProperties = useLoaderData();
    const properties = allProperties.filter(pro => pro.status === "verified");
    return (
        <div className="grid grid-cols-3 gap-10 mb-10">
            {
                properties.map(property =>
                    <div key={property._id} className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex space-x-4">
                            <img alt="" src={property?.agentPhotoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{property?.name}</a>

                            </div>
                        </div>
                        <div>
                            <img src={property?.imageURL} alt="" className="object-cover w-full mb-4 h-36 sm:h-96 bg-gray-500" />
                            <h2 className="mb-1 text-xl font-semibold">{property?.title}</h2>
                            <div className="  text-gray-400">

                                <p className=" text-sm text-gray-400">Location : {property?.address},{property?.city},{property?.country}</p>
                                <p className="  text-gray-400">Verification Status: {property?.status}</p>
                                <p className="  text-gray-400">Price : ${property?.startPrice} - $ {property?.endPrice}</p>

                            </div>

                            <Link to={`/property/${property._id}`} type="button" className="mt-5 px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                                Details
                            </Link>
                        </div>

                    </div>
                )}



        </div>
    );
};

export default AllPropertiesCard;