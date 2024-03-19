import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FaChalkboardUser, FaHouse } from "react-icons/fa6";
import { useState, useEffect } from "react";

const DashboardLayout = () => {
  const [reviewsLength, setReviewsLength] = useState(0);
  const [propertiesLength, setPropertiesLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsResponse = await fetch("https://real-estate-server-one.vercel.app/reviews");
        const reviewsData = await reviewsResponse.json();
        setReviewsLength(reviewsData.length);

        const propertyResponse = await fetch("https://real-estate-server-one.vercel.app/add-property");
        const propertiesData = await propertyResponse.json();
        setPropertiesLength(propertiesData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='relative min-h-screen md:flex'>
      <Sidebar></Sidebar>

      <div className='flex-1  md:ml-64'>
        <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
          <div className="grid grid-cols-2 gap-5 ml-11 mx-auto">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col">
                <MdSubscriptions className="text-5xl font-bold text-[#324934e8]" />
                <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#324934e8] dark:text-white">
                  {reviewsLength} Reviewers
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Explore a step-by-step guideline on how members can certify for their weekly benefits.</p>
            </div>

            {/* Total Users */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col">
                <FaUser className="text-5xl font-bold text-[#324934e8]" />
                <h5 className="pl-2 text-transform: uppercase text-2xl font-semibold tracking-tight text-[#324934e8] dark:text-white">
                {propertiesLength} Total Users 
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Monitor and manage the total number of users registered on this platform.</p>
            </div>
          </div>
        </section>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
