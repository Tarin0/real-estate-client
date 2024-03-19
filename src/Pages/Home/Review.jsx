import { useEffect, useState } from "react";


const Review = () => {
    const [reviewsLength, setReviewsLength] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const reviewsResponse = await fetch("https://real-estate-server-one.vercel.app/reviews");
            const reviewsData = await reviewsResponse.json();
            setReviewsLength(reviewsData);
    
            
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
      const fewReviews = reviewsLength.slice(0, 3);

    return (
        <div>
            <div className="space-y-2 text-center ">
                        <h2 className="text-3xl font-bold">Lates Reviews</h2>
                        <p className="font-serif text-sm ">Best Choices</p>
                    </div>
            <div className="grid grid-cols-3 gap-12 m-6">
                {fewReviews.map(review => 
            <div key={review._id} className="max-w-sm p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
            <article>
                <h2 className="text-xl font-bold">{review.title}</h2>
                <p className="mt-4 text-gray-400">{review?.reviewDescription}</p>
                <div className="flex items-center mt-8 space-x-4">
                    <img src={review?.reviewerImage} alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                    <div>
                        <h3 className="text-sm font-medium">{review?.reviewerName}</h3>
                        <time dateTime="2021-02-18" className="text-sm text-gray-400">{review?.date} {review?.time}</time>
                    </div>
                </div>
            </article>
        </div>
        
            )}
            
            
            </div>
        </div>
    );
};

export default Review;