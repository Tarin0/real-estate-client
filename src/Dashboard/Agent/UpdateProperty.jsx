import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { imageUpload } from "../../api/utlis";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const UpdateProperty = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const addedProperties = useLoaderData();
    const handleUpdate = async e => {

        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const startPrice = form.startPrice.value;
        const endPrice = form.endPrice.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const room = form.room.value;
        const parking = form.parking.value;
        const bathroom = form.bathroom.value;
        const image = form.image.files[0];

        try {
            const imageData = await imageUpload(image);
            const imageURL = imageData?.data?.display_url;
            const updateProperty = { title, startPrice, endPrice, address, country, room, city, parking, bathroom, imageURL};

            

            const updateResponse = await fetch(`https://real-estate-server-one.vercel.app/add-property/${addedProperties?._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProperty)
            });

            if (!updateResponse.ok) {
                throw new Error(`Failed to update user role: ${updateResponse.statusText}`);
            }

            const updateData = await updateResponse.json();
            console.log("Update User Role Response:", updateData);

            if (updateData.modifiedCount > 0) {
                toast.success("Property updated successfully");
            } else {
                toast.success("Property not updated");
            }
        }
        catch (err) {
            toast.error(err);
        }
    }
   

    return (
        <div className="mb-5">

            <section className="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Update Property</h1>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Agent name</label>
                            <input
                                defaultValue={displayName}
                                readOnly
                                name="name"
                                type="text"

                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                readOnly
                                defaultValue={email}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-w rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>

                        <div>
                            <label className="text-white">Property Title</label>
                            <input
                                name="title"
                                type="text"
                                defaultValue={addedProperties?.title}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Starting Price</label>
                            <input
                                defaultValue={addedProperties?.startPrice}
                                name="startPrice"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Ending Price</label>
                            <input
                                defaultValue={addedProperties?.endPrice}
                                name="endPrice"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Address</label>
                            <input
                                defaultValue={addedProperties?.address}
                                name="address"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">City</label>
                            <input
                                defaultValue={addedProperties?.city}
                                name="city"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Country</label>
                            <input
                                defaultValue={addedProperties?.country}
                                name="country"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Room No</label>
                            <input
                                defaultValue={addedProperties?.room}
                                name="room"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Parking No</label>
                            <input
                                defaultValue={addedProperties?.parking}
                                name="parking"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Bathroom No</label>
                            <input
                                defaultValue={addedProperties?.bathroom}
                                name="bathroom"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Property Image</label>
                            <input
                                required
                                name="image"
                                type="file"
                                id='image'
                                accept='image/*'

                                className="block file-input file-input-bordered file-input-success w-full max-w-xs px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button type='submit' className="btn text-white text-xl border-none bg-gradient-to-r from-[#242523] to-gray-500 hover:from-gray-400 hover:to-[#2e312856]">Update</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateProperty;