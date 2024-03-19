import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { imageUpload } from '../../api/utlis';
import toast from "react-hot-toast";
const AddProperty = () => {
    // const trainerSlot = useLoaderData();
    const { user } = useContext(AuthContext);
    const {displayName, email } = user;
   
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const startPrice = form.startPrice.value;
        const endPrice = form.endPrice.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const room = form.room.value;
        const parking = form.parking.value;
        const bathroom = form.bathroom.value;
        const description = form.description.value;
        const image = form.image.files[0];
        // console.log(selectedSlot);
        try {
            const imageData = await imageUpload(image);
            const imageURL = imageData?.data?.display_url;
            const agentPhotoURL = user?.photoURL;

            const property = { email, name,title,startPrice,agentPhotoURL,endPrice,address,country,room,city,parking,bathroom, imageURL,  description, status:'pending'};
            fetch('https://real-estate-server-one.vercel.app/add-property', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(property)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Your property added');
                        form.reset();
                    }
                })
        }
        catch (err) {
            toast.error(err);
        }

    };

    return (
        <div className="mb-5">
           
            <section className="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize text-center">Add Property</h1>
                <form onSubmit={handleSubmit}>
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


                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Starting Price</label>
                            <input
                                name="startPrice"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Ending Price</label>
                            <input
                                name="endPrice"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Address</label>
                            <input
                                name="address"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">City</label>
                            <input
                                name="city"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Country</label>
                            <input
                                name="country"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Room No</label>
                            <input
                                name="room"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Parking No</label>
                            <input
                                name="parking"
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Bathroom No</label>
                            <input
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
                        <div>
                            <label className="text-white">Property Description</label>
                            <textarea placeholder="Describe Class" name='description' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring textarea textarea-bordered textarea-md  " ></textarea>

                        </div>
                    </div>


                    <div className="flex justify-center mt-6">
                        <button type='submit' className="btn text-white text-xl border-none bg-gradient-to-r from-[#242523] to-gray-500 hover:from-gray-400 hover:to-[#2e312856]">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddProperty;