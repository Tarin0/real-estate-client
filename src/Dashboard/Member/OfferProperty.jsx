

const OfferProperty = () => {
    return (
        <div>
             <div className="mb-20">
           
           <section className="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
               <h1 className="text-xl font-bold text-white capitalize text-center">Apply For Trainer</h1>
               <form>
                   <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      

                       <div>
                           <label className="text-white">Property Title</label>
                           <input
                               name="propertyTitle"
                               type="text"
                               readOnly
                               // defaultValue={email}
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-w rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                           />
                       </div>

                       <div>
                           <label className="text-white">Property Location</label>
                           <input
                               name="propertyLocation"
                               type="text"


                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                           />
                       </div>
                       <div>
                           <label className="text-white">Agent Name</label>
                           <input
                               name="agentName"
                               type="text"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                           />
                       </div>
                       <div>
                           <label className="text-white">Offered Amount</label>
                           <input
                               name="room"
                               type="number"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                           />
                       </div>
                       <div>
                           <label className="text-white">Buyer Name</label>
                           <input
                               name="room"
                               type="number"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                           />
                       </div>
                       <div>
                           <label className="text-white">Buyer Email</label>
                           <input
                               name="room"
                               type="number"
                               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"
                           />
                       </div>
                       <div>
                           <label className="text-white">Buying Date</label>
                           <input
                               name="room"
                               type="date"
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
        </div>
    );
};

export default OfferProperty;