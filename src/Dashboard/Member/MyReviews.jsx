import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";


const MyReviews = () => {
    const {user} = useAuth();
    const allReviews = useLoaderData();
    const myReviews = allReviews.filter(review => review.reviewerEmail === user?.email)
    const [reviewInfo, setReviewInfo] = useState(myReviews);

    const handleDelete = async (review) => {
        try {
            const id = review._id;
            // Remove property from state
            const remainingReviewList = reviewInfo.filter(pro => pro._id !== id);
            setReviewInfo(remainingReviewList);
    
            const deleteResponse = await fetch(`https://real-estate-server-one.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            });
    
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete review : ${deleteResponse.statusText}`);
            }
    
            const deleteData = await deleteResponse.json();
            toast.success("Deleted Review", deleteData);
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <div>
             <div>
            <div className="grid grid-cols-2 gap-12 m-6">
            {reviewInfo.map(review => 
            <div key={review._id} className="max-w-sm p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
            <article>
                <h2 className="text-xl font-bold">{review?.title}</h2>
                <p className="mt-4 text-gray-400">{review?.reviewDescription}</p>
                <div className="flex items-center mt-8 space-x-4">
                    <div>
                        <h3 className="text-sm font-medium">Agent : {review?.agentName}</h3>
                        <time dateTime="2021-02-18" className="text-sm text-gray-400">{review?.date} {review?.time} </time>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(review) } className="ml-16 btn">Remove</button>
                    </div>
                </div>
            </article>
        </div>


                )}
            
            
            
            
            </div>
        </div>
        </div>
    );
};

export default MyReviews;