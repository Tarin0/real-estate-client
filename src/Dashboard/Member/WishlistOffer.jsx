import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const WishlistOffer = () => {
    const { user } = useContext(AuthContext);
    const addedProperties = useLoaderData();
    const { agentName, propertyTitle, agentEmail } = addedProperties;
    const handleUpdate = async e => {
        e.preventDefault();
        const form = e.target;
        const buyingDate = form.buyingDate.value;
        const offeredAmount = form.offeredAmount.value;
        const buyerEmail = addedProperties?.userEmail;
        const buyerName = addedProperties?.userName;
        const propertyImage = addedProperties?.propertyImage;
        const propertyAddress = addedProperties?.propertyAddress;
        const propertyCity = addedProperties?.propertyCity;
        const propertyCountry = addedProperties?.propertyCountry;
        try {

            const wishOffer = { agentName, propertyTitle, agentEmail,buyerName,buyerEmail, buyingDate, offeredAmount,propertyImage,propertyAddress,propertyCity , propertyCountry,status:"pending" };

            fetch('http://localhost:5000/wishlist-offer', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(wishOffer)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Your wish offer added');
                        form.reset();
                    }
                })
        }
        catch (err) {
            toast.error(err);
        }
    }


    return (
        <div className="mb-5">

            <section className="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Wishlist Offer</h1>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Agent name</label>
                            <input
                                defaultValue={addedProperties?.agentName}
                                readOnly
                                name="name"
                                type="text"

                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Property Title</label>
                            <input
                                name="title"
                                type="text"
                                defaultValue={addedProperties?.propertyTitle}
                                readOnly
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Starting Price</label>
                            <input
                                defaultValue={addedProperties?.startPrice}
                                readOnly
                                name="startPrice"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Ending Price</label>
                            <input
                                defaultValue={addedProperties?.endPrice}
                                readOnly
                                name="endPrice"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Address</label>
                            <input
                                defaultValue={addedProperties?.propertyAddress}
                                readOnly
                                name="address"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">City</label>
                            <input
                                defaultValue={addedProperties?.propertyCity}
                                readOnly
                                name="city"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Country</label>
                            <input
                                defaultValue={addedProperties?.propertyCountry}
                                readOnly
                                name="country"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Buyer Name</label>
                            <input
                                defaultValue={addedProperties?.userName}
                                readOnly
                                name="buyerName"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Buyer Email</label>
                            <input
                                defaultValue={addedProperties?.userEmail}
                                readOnly
                                name="buyerEmail"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Buying Date</label>
                            <input
                                name="buyingDate"
                                type="date"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Offered Amount</label>
                            <input
                                min={parseFloat(addedProperties?.startPrice)}
                                max={parseFloat(addedProperties?.endPrice)}
                                name="offeredAmount"
                                type="number"
                                step="any"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type='submit' className="btn text-white text-xl border-none bg-gradient-to-r from-[#242523] to-gray-500 hover:from-gray-400 hover:to-[#2e312856]">Offer</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default WishlistOffer;