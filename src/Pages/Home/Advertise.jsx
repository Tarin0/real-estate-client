import { Link } from "react-router-dom";


const Advertise = ({properties}) => {
    const fewProperties = properties.slice(0, 4);
    return (
        <div>
            <section className="py-6 sm:py-12  ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center ">
                        <h2 className="text-3xl font-bold">Popular Residence</h2>
                        <p className="font-serif text-sm ">Best Choices</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {fewProperties.map(prop => 
                        <article key={prop._id} className="flex flex-col bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src={prop?.imageURL} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline text-violet-400">{prop?.title}</a>
                            <h3 className="flex-1 py-2 text-lg text-white font-semibold leadi">{prop?.address} , {prop?.city} , {prop?.country}</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white">
                                <span>${prop?.startPrice} - ${prop?.endPrice}</span>
                                <span>Verification status: {prop?.status}</span>
                                
                            </div>
                            <Link to={`/property/${prop._id}`} className="mt-4 btn">Details</Link>
                        </div>
                    </article>
                   
                        )}
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advertise;