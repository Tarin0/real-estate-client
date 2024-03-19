import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const MySoldProperties = () => {
	const allProperties = useLoaderData();
	const mySoldProperties = allProperties.filter(t =>
        t.status === "paid");
    const [propertyInfo, setPropertyInfo] = useState(mySoldProperties);
   
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<h2 className="mb-4 text-2xl text-gray-600 font-semibold leadi">Sold Properties</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col></col>
				<col></col>
				<col></col>
				<col></col>
				<col className="w-24"></col>
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Property Title</th>
					<th className="p-3">Property Location</th>
					<th className="p-3">Buyer Email</th>
					<th className="p-3">Buyer Name</th>
					<th className="p-3 text-right">Sold Price</th>
					
				</tr>
			</thead>
			<tbody>
				{propertyInfo.map(prop => 
					
					<tr key={prop._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
					<td className="p-3">
						<p>{prop?.propertyTitle}</p>
					</td>
					<td className="p-3">
						<p>{prop?.propertyAddress},{prop?.propertyCity},{prop?.propertyCountry}</p>
					</td>
					<td className="p-3">
						<p>{prop?.buyerEmail}</p>
					</td>
					<td className="p-3">
						<p className="text-gray-400">{prop?.buyerName}</p>
					</td>
					<td className="p-3 text-right">
						<p>${prop?.offeredAmount}</p>
					</td>
					
				</tr>
					
					)}
				
				
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default MySoldProperties;