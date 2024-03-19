

const Timeline = () => {
    return (
        <div>
        <section className="mb-12 bg-gray-800 text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                            <h3 className="text-3xl font-semibold">Our Journey</h3>
                            <span className="text-sm font-bold tracki uppercase text-gray-400">Experience Timeline</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                <h3 className="text-xl font-semibold tracki">Establishment of Our Company</h3>
                                <time className="text-xs tracki uppercase text-gray-400">Dec 2020</time>
                                <p className="mt-3">We laid the foundation of our real estate company with a vision to provide exceptional service and guidance to our clients.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                <h3 className="text-xl font-semibold tracki">Expansion of Services</h3>
                                <time className="text-xs tracki uppercase text-gray-400">Jul 2019</time>
                                <p className="mt-3">In response to growing demand, we expanded our services to cover a wider range of real estate needs, ensuring comprehensive support for our clients.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                <h3 className="text-xl font-semibold tracki">Company Inception</h3>
                                <time className="text-xs tracki uppercase text-gray-400">Jan 2016</time>
                                <p className="mt-3">Our journey began with a passionate team dedicated to revolutionizing the real estate industry and making homeownership dreams a reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    );
};

export default Timeline;