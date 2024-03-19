
const OfferedProperties = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
                <h2 className="mb-4 text-2xl text-gray-600 font-semibold leadi">Offered Properties</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col></col>
                            <col className="w-24"></col>
                            <col></col>
                            
                        </colgroup>
                        <thead className="bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Property Title</th>
                                <th className="p-3">Property Location</th>
                                <th className="p-3">Buyer Email</th>
                                <th className="p-3">Buyer Name</th>
                                <th className="p-3 text-right">Offered Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <div className='flex justify-evenly mt-5'>
                                        <button className="btn btn-outline btn-success"
                                        >
                                            Confirm
                                        </button>

                                        <button className="btn btn-outline btn-error"

                                        >
                                            Reject
                                        </button>


                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Tesla Inc.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$275</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <div className='flex justify-evenly mt-5'>
                                        <button className="btn btn-outline btn-success"
                                        >
                                            Confirm
                                        </button>

                                        <button className="btn btn-outline btn-error"

                                        >
                                            Reject
                                        </button>


                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Coca Cola co.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$8,950,500</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <div className='flex justify-evenly mt-5'>
                                        <button className="btn btn-outline btn-success"
                                        >
                                            Confirm
                                        </button>

                                        <button className="btn btn-outline btn-error"

                                        >
                                            Reject
                                        </button>


                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-900">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Nvidia Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$98,218</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                                <td>
                                    <div className='flex justify-evenly mt-5'>
                                        <button className="btn btn-outline btn-success"
                                        >
                                            Confirm
                                        </button>

                                        <button className="btn btn-outline btn-error"

                                        >
                                            Reject
                                        </button>


                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OfferedProperties;