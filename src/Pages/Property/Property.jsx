
import "./Property.css";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "./Map.jsx";
import ReviewModal from "./ReviewModal.jsx";
import ReviewerPost from "./ReviewerPost.jsx";
import {  useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth.js";
import { useEffect, useState } from "react";
const Property = () => {
    const {user} = useAuth();
    const property = useLoaderData();
    const [isInWishlist, setIsInWishlist] = useState(false);
    useEffect(() => {
        fetch("https://real-estate-server-one.vercel.app/wishlist")
          .then((res) => res.json())
          .then((wishlist) => {
            const userEmail = user.email; // Implement a function to get the user's email
            const matchingItem = wishlist.find(
              (item) => item.userEmail === userEmail && item.propertyTitle === property.title
            );
            setIsInWishlist(!!matchingItem); // Set isInWishlist based on whether matchingItem exists
          })
          .catch((error) => {
            toast.error("Error fetching wishlist:", error);
          });
      }, [property.title]);


    const handleSubmit =() => {
    const propertyTitle = property.title;
    const propertyImage = property.imageURL;
    const propertyAddress = property.address;
    const propertyCity = property.city;
    const propertyCountry = property.country;
    const agentName = property.name;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const agentEmail = property.email;
    const agentImage = property.agentPhotoURL;
    const startPrice = property.startPrice;
    const endPrice = property.endPrice;

        try {

            const wishlist = { userName,userEmail,propertyTitle, startPrice,endPrice,propertyImage,propertyAddress, propertyCity,propertyCountry,agentName, agentEmail,agentImage};
           
            fetch('https://real-estate-server-one.vercel.app/wishlist', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(wishlist)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Your wishlist added');
                        setIsInWishlist(true);
                    }
                })
        }
        catch (err) {
            toast.error(err);
        }

    };
    return (
        <div>
            <div className="wrapper my-12">
                <div key={property._id} className="flex flex-col items-start p-2 property-container">
                    {/* image */}
                    <img src={property?.imageURL} alt="home image" />

                    <div className="flex justify-center items-center property-details">
                        {/* left */}
                        <div className="flex flex-col items-start left">
                            {/* head */}
                            <div className="flex justify-start items-start head">
                                <span className="font-bold text-xl">{property?.title}</span>
                                <span className="text-gray-500" style={{ fontSize: "1.5rem" }}>
                                    ${property?.startPrice} - ${property?.endPrice}
                                </span>
                            </div>
                            <span className="">Agent Name : {property?.name}{"  "}Verification Status : {property?.status} </span>
                            {/* facilities */}
                            <div className="flex justify-start items-start facilities">
                                {/* bathrooms */}
                                <div className="flex justify-start items-start facility">
                                    <FaShower size={20} color="#1F3E72" />
                                    <span>{property?.bathroom} Bathrooms</span>
                                </div>

                                {/* parkings */}
                                <div className="flex justify-start items-start facility">
                                    <AiTwotoneCar size={20} color="#1F3E72" />
                                    <span>{property?.parking} Parking</span>
                                </div>

                                {/* rooms */}
                                <div className="flex justify-start items-start facility">
                                    <MdMeetingRoom size={20} color="#1F3E72" />
                                    <span>{property?.room} Room/s</span>
                                </div>
                            </div>

                            {/* description */}

                            <span className="secondaryText" style={{ textAlign: "justify" }}>
                            {property?.description}
                               </span>

                            {/* address */}

                            <div className="flex justify-start items-start" style={{ gap: "1rem" }}>
                                <MdLocationPin size={25} />
                                <span className="secondaryText">
                                {property?.address}{" "}
                                {property?.city}{" "},
                                {property?.country}
                                </span>
                            </div>


                            <button onClick={handleSubmit} 
                            disabled={isInWishlist}
                            className="btn px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                            {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                            </button>
                        </div>

                        {/* right side */}
                        <div className="map">
                            <Map
                                address={property?.address}
                                city={property?.city}
                                country={property?.country}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="space-y-2 text-center ">
                    <h2 className="text-3xl font-bold">Review Section</h2>
                    <p className="font-serif text-sm ">Best Choices</p>
                </div>
                <div >
                    <ReviewerPost property={property}></ReviewerPost>
                </div>
            </div>
            <div>
                <ReviewModal property={property}></ReviewModal>
            </div>
        </div>
    );
};

export default Property;
